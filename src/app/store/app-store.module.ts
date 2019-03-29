import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CustomerStoreModule } from './customer';

@NgModule({
  imports: [
    StoreModule.forRoot([]),
    CustomerStoreModule
  ]
})
export class AppStoreModule {}
