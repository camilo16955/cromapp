import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  private db: SQLiteDBConnection | null = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  async createDatabase() {
    try {
      const dbResult: any = await CapacitorSQLite.createConnection({
        database: 'api_data.db',
        version: 1,
        encrypted: false,
        mode: 'no-encryption'
      });

      if (dbResult) {
        this.db = dbResult as SQLiteDBConnection;
        await this.db.open();
        await this.createTables();
      } else {
        console.error('Error creating connection');
      }
    } catch (error) {
      console.error('Error creating database:', error);
    }
  }

  private async createTables() {
    if (!this.db) {
      console.error('Database connection is not established');
      return;
    }

    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS api_data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          data TEXT
        );
      `;
      await this.db.execute(createTableQuery);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  async saveData(data: string) {
    if (!this.db) {
      console.error('Database connection is not established');
      return;
    }

    try {
      const query = `INSERT INTO api_data (data) VALUES (?)`;
      await this.db.run(query, [data]);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  async fetchData(): Promise<any[]> {
    if (!this.db) {
      console.error('Database connection is not established');
      return [];
    }

    try {
      const query = `SELECT * FROM api_data`;
      const res = await this.db.query(query);
      return res.values || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  getDataFromApi(): Observable<any[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/posts`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching data from API', error);
        return from(this.fetchData().then(data => data || []));
      })
    );
  }

  async getData(): Promise<any[]> {
    try {
      const data = await this.getDataFromApi().toPromise() || [];
      await this.saveData(JSON.stringify(data));
      return data;
    } catch (error) {
      console.error('Error fetching data from API, fetching from local storage:', error);
      return await this.fetchData() || [];
    }
  }
}
