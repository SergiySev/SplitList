export * from './customer.reducer';

import {STATE_ID} from './customer.reducer';


import * as fromCustomer from './customer.reducer';
import { createFeatureSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  customers: fromCustomer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomer.reducer
};

export const getState = createFeatureSelector<AppState>(STATE_ID);




