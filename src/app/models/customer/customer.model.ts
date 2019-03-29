import {Feedback} from '@app/models/customer/feedback.model';

export interface Customer {
  id: string;
  label: string;
  feedback: Feedback[];
}
