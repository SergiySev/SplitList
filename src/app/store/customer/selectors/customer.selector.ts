import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import {State} from '../reducers/customer.reducer';

const getEntities = (state: State) => state.entities;

const getIds = (state: State) => state.ids;

const getState = createSelector(fromFeature.getState, (state: fromFeature.AppState) => state.customers);

const getCustomerEntities = createSelector(getState, getEntities);

const getCustomerIds = createSelector(getState, getIds);

export const getSelectedId = createSelector(getState, entities => entities.selected);

export const getCustomers = createSelector(getCustomerEntities, getCustomerIds, (entities, ids) => ids.map(id => entities[id]));

export const getFeebacks = createSelector(getCustomerEntities, getSelectedId, (entities, id) => entities[id] ? entities[id].feedback : []);



