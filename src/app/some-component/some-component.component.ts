import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { loadData, loadDataSuccess, loadDataFailure } from '../store/actions';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-some',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss'],
})
export class SomeComponent implements OnInit {
  data: any;

  constructor(private store: Store<AppState>, private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.store.dispatch(loadData());

    try {
      const data = await this.apiService.getData();
      this.store.dispatch(loadDataSuccess({ data }));
    } catch (error) {
      console.error('Error loading data', error);
      this.store.dispatch(loadDataFailure({ error }));
    }

    this.store.select(state => state.dataState.data).subscribe(data => {
      this.data = data;
      console.log('Data from store:', data);
    });
  }
}

