import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventBusService} from './services/event-bus/event-bus.service';
import {WidgetComponent} from './widget.component';
import {HeaderComponent} from './header/header.component';
import {InputerComponent} from './inputer/inputer.component';
import {ListComponent} from './list/list.component';
import {PipesSharedModule} from '@app/pipes/shared.module';
import {DirectivesSharedModule} from '@app/directives/shared.module';

@NgModule({
  declarations: [
    WidgetComponent,
    HeaderComponent,
    InputerComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PipesSharedModule,
    DirectivesSharedModule
  ],
  exports: [WidgetComponent],
  providers: [EventBusService]
})
export class WidgetModule { }
