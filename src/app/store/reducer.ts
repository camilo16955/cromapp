import { createReducer, on, Action } from '@ngrx/store';
import * as DataActions from './actions';

// Definir la interfaz para el estado
export interface AppState {
  data: any;
  error: any;
}

// Estado inicial utilizando la interfaz definida
export const initialState: AppState = {
  data: null,
  error: null,
};

const _dataReducer = createReducer(
  initialState,
  on(DataActions.loadDataSuccess, (state: AppState, { data }: { data: any }) => ({ ...state, data })),
  on(DataActions.loadDataFailure, (state: AppState, { error }: { error: any }) => ({ ...state, error }))
);

// Función reducer utilizando la interfaz para el tipo de estado
export function dataReducer(state: AppState | undefined, action: Action) {
  return _dataReducer(state, action);
}
