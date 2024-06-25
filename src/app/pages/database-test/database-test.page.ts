import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-database-test',
  templateUrl: './database-test.page.html',
  styleUrls: ['./database-test.page.scss'],
})
export class DatabaseTestPage implements OnInit {
  users: any[] = [];
  username: string = '';
  password: string = '';

  constructor(private dbService: DatabaseService) { }

  async ngOnInit() {
    await this.dbService.createDatabase();
    this.loadUsers();
  }

  async addUser() {
    await this.dbService.addUser(this.username, this.password);
    this.loadUsers();
  }

  async loadUsers() {
    this.users = await this.dbService.getUsers();
  }
}
