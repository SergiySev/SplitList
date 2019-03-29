import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import {
  getCustomers,
  getFeebacks,
  getSelectedId
} from './selectors';
import {
  CreateCustomer,
  CreateFeedback,
  SelectCustomer,
} from './actions';
import {Customer} from '@app/models';

@Injectable()
export class CustomerFacade {

  public customers$ = this.store.select(getCustomers);
  public feedbacks$ = this.store.select(getFeebacks);
  public selected$ = this.store.select(getSelectedId);

  constructor(private store: Store<State>) {}

  createCustomer(payload: Customer) {
    this.store.dispatch(new CreateCustomer(payload));
  }

  selectCustomer(payload) {
    this.store.dispatch(new SelectCustomer(payload));
  }

  createFeedback(payload) {
    this.store.dispatch(new CreateFeedback(payload));
  }
}
