import { Action } from '@ngrx/store';
import {Customer} from '@app/models';
import {Feedback} from '@app/models/customer/feedback.model';

export const CREATE_CUSTOMER = '[Customer] CREATE Customer';
export const SELECT_CUSTOMER = '[Customer] Select Customer';
export const CREATE_FEEDBACK = '[Feedback] CREATE Feedback';

export class CreateCustomer implements Action {
  readonly type = CREATE_CUSTOMER;
  constructor(public payload: Customer) {
  }
}

export class SelectCustomer implements Action {
  readonly type = SELECT_CUSTOMER;
  constructor(public payload: { id: string }) {}
}

export class CreateFeedback implements Action {
  readonly type = CREATE_FEEDBACK;
  constructor(public payload: {
    parentId: string,
    feedback: Feedback
  }) {}
}


export type CustomerActions =
  | CreateCustomer
  | CreateFeedback
  | SelectCustomer;
