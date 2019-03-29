import { async, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import {
  CreateCustomer,
  CreateFeedback,
  SelectCustomer
} from './actions';
import { State } from './reducers';
import { CustomerStoreModule } from './customer-store.module';
import { CustomerFacade } from './customer.facade';

describe('CustomerFacade', () => {
  let store: Store<State>;
  let facade: CustomerFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        CustomerStoreModule
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    facade = TestBed.get(CustomerFacade);
  }));

  it('should call CreateCustomer', () => {
    const val = {id: '111', label: 'Test', feedback: []};
    facade.createCustomer(val);
    const action = new CreateCustomer(val);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call CreateCustomer', () => {
    const val = {id: '111'};
    facade.selectCustomer(val);
    const action = new SelectCustomer(val);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call CreateFeedback', () => {
    const val = {parentId: '111', feedback: {id: '333', label: 'Test'}};
    facade.createFeedback(val);
    const action = new CreateFeedback(val);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
