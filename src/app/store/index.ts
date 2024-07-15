import { ActionReducerMap } from '@ngrx/store';
import { dataReducer } from './reducer';

export interface AppState {
  dataState: any;
}

export const reducers: ActionReducerMap<AppState> = {
  dataState: dataReducer,
};
