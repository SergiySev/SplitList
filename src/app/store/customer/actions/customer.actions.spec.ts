import { Customer } from '@app/models';
import {
  CREATE_CUSTOMER, SELECT_CUSTOMER, CREATE_FEEDBACK,
  CreateCustomer, CreateFeedback, SelectCustomer
} from '../actions';


describe('CustomerActions', () => {

  it('should create CreateCustomer', () => {
    const expectedAction = {
      type: CREATE_CUSTOMER,
      payload: {
        id: '111',
        label: 'Test',
        feedback: []
      }
    };
    const action = new CreateCustomer(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create SelectCustomer', () => {
    const expectedAction = {
      type: SELECT_CUSTOMER,
      payload: { id: 'Test' }
    };
    const action = new SelectCustomer(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create CreateCustomer', () => {
    const expectedAction = {
      type: CREATE_FEEDBACK,
      payload: {
        parentId: '111',
        feedback: {
          id: '222',
          label: 'Test'
        }
      }
    };

    const action = new CreateFeedback(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });


});
