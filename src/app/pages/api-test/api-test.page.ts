import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  styleUrls: ['./api-test.page.scss'],
})
export class ApiTestPage implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      this.data = await this.apiService.getData();
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

  async fetchData() {
    try {
      this.data = await this.apiService.getData();
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
}
