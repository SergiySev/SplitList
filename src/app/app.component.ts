import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerFacade} from '@app/store/customer/customer.facade';
import {Customer} from '@app/models';
import * as uuid from 'uuid';
import {Feedback} from '@app/models/customer/feedback.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  customersList = [];
  feedbacksList = [];
  selectedId: string;

  private customersListener;
  private feedbacksListener;
  private selectedListener;

  constructor(private customerService: CustomerFacade) {
  }

  ngOnInit() {
    this.customersListener = this.customerService.customers$.subscribe(customers => this.customersList = customers);

    this.feedbacksListener = this.customerService.feedbacks$.subscribe(feedbacks => this.feedbacksList = feedbacks);

    this.selectedListener = this.customerService.selected$.subscribe(selectedId => this.selectedId = selectedId);
  }

  ngOnDestroy(): void {
    this.customersListener.unsubscribe();
    this.selectedListener.unsubscribe();
  }

  onSaveCustomer(label) {
    this.customerService.createCustomer({
      id: uuid.v4(),
      label,
      feedback: []
    } as Customer);
  }

  onSaveFeedback(label) {
    this.customerService.createFeedback({
      parentId: this.selectedId,
      feedback: {id: uuid.v4(), label} as Feedback
    });
  }

  onSelectCustomer(id) {
    this.customerService.selectCustomer( {id});
  }
}

