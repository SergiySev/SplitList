import * as uuid from 'uuid';
import { Customer } from '@app/models';
import {
  CustomerActions,
  SELECT_CUSTOMER,
  CREATE_CUSTOMER,
  CREATE_FEEDBACK,
  CreateCustomer,
  CreateFeedback,
  SelectCustomer
} from '../actions';
import { reducer, initialState, State } from './customer.reducer';


describe('CustomerReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});

describe('CustomerAction', () => {

  it('should handle CreateCustomer', () => {
    const customer = {
      id: '111',
      label: 'Test',
      feedback: []
    };
    const initial: State = {
      ids: [],
      entities: {},
      selected: null
    };
    const expected: State = {
      ids:  [customer.id, ...initial.ids],
      entities: { [customer.id]: customer, ...initial.entities},
      selected: initial.selected
    };
    const action = new CreateCustomer(customer);
    expect(reducer(initial, action)).toEqual(expected);
  });

  it('should handle CreateFeedback', () => {
    const payload = {
      parentId: '000',
      feedback: {
        id: '111',
        label: 'Test',
      }
    };
    const initial: State = {
      ids: ['000'],
      entities: {'000': {id: '000', label: 'Test', feedback: []}},
      selected: '000'
    };
    const expected: State = {
      ids: [...initial.ids],
      entities: {[payload.parentId]: {id: '000', label: 'Test', feedback: [{...payload.feedback}]}},
      selected: initial.selected
    };
    const action = new CreateFeedback(payload);
    expect(reducer(initial, action)).toEqual(expected);
  });

  it('should handle SelectCustomer', () => {
    const selected = '111';
    const initial: State = {
      ids: ['000'],
      entities: {'000': {id: '000', label: 'Test', feedback: []}},
      selected: null
    };
    const expected: State = {
      ids:  [...initial.ids],
      entities: { ...initial.entities},
      selected
    };
    const action = new SelectCustomer({id: selected});
    expect(reducer(initial, action)).toEqual(expected);
  });

});

