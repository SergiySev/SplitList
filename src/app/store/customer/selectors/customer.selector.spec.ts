import {async, TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import { State } from '../reducers';
import {CustomerStoreModule} from '@app/store/customer';
import * as fromSelectors from './customer.selector';
import * as fromActions from '../actions/customer.actions';
import {Customer} from '@app/models';


describe('Customer Selectors', () => {
  let store: Store<State>;

  const customer = {
    id: '11',
    label: 'Test',
    feedback: []
  } as Customer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        CustomerStoreModule
      ]
    });

    store = TestBed.get(Store);
  }));


  describe('getCustomers', () => {
    it('should return customers', () => {
      let result;

      store
        .select(fromSelectors.getCustomers)
        .subscribe(list => (result = list));

      store.dispatch(new fromActions.CreateCustomer(customer));

      expect(result).toEqual([customer]);
    });
  });

  describe('getSelectedId', () => {
    it('should return selected id', () => {
      let result;

      store
        .select(fromSelectors.getSelectedId)
        .subscribe(selectedId => (result = selectedId));

      store.dispatch(new fromActions.CreateCustomer(customer));
      store.dispatch(new fromActions.SelectCustomer({id: customer.id}));

      expect(result).toEqual(customer.id);
    });
  });

});
