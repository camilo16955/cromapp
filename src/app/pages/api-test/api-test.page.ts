import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  styleUrls: ['./api-test.page.scss'],
})
export class ApiTestPage implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    await this.apiService.createDatabase();
    this.fetchData();
  }

  async fetchData() {
    this.data = await this.apiService.getData();
  }
}
