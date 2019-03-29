import {NgModule} from '@angular/core';
import {AutoFocusDirective} from './auto-focus/auto-focus.directive';
import {MouseHoverDirective} from './mouse-hover/mouse-hover.directive';

@NgModule({
  declarations: [ AutoFocusDirective , MouseHoverDirective],
  exports: [ AutoFocusDirective, MouseHoverDirective ]
})

export class DirectivesSharedModule {}
