import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection, capSQLiteChanges, capSQLiteValues } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: SQLiteDBConnection | null = null;

  constructor() { }

  async createDatabase() {
    try {
      // Obtiene una conexión de la base de datos
      const dbResult: any = await CapacitorSQLite.createConnection({
        database: 'data.db',
        version: 1,
        encrypted: false,
        mode: 'no-encryption'
      });

      // Verifica que dbResult no es null o undefined y tiene la función open
      if (dbResult != null && typeof dbResult === 'object' && typeof dbResult.open === 'function') {
        this.db = dbResult as SQLiteDBConnection;
        await this.db.open();
        await this.createTables();
      } else {
        console.error('Error creating connection or invalid connection object');
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
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT,
          password TEXT
        );
      `;
      await this.db.execute(createTableQuery);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  // Métodos CRUD
  async addUser(username: string, password: string): Promise<number> {
    if (!this.db) {
      console.error('Database connection is not established');
      return 0;
    }

    try {
      const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
      const res: capSQLiteChanges = await this.db.run(query, [username, password]);
      return res.changes?.changes ?? 0;
    } catch (error) {
      console.error('Error adding user:', error);
      return 0;
    }
  }

  async getUsers(): Promise<any[]> {
    if (!this.db) {
      console.error('Database connection is not established');
      return [];
    }

    try {
      const query = `SELECT * FROM users`;
      const res: capSQLiteValues = await this.db.query(query);
      return res.values || [];
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}
