import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {reducers, STATE_ID} from './reducers';
import {CustomerFacade} from '@app/store/customer/customer.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(STATE_ID, reducers)
  ],
  providers: [CustomerFacade]
})
export class CustomerStoreModule {}
