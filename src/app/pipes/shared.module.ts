import {NgModule} from '@angular/core';
import {TrimPipe} from './tirm/trim.pipe';

@NgModule({
  declarations: [ TrimPipe ],
  exports:    [ TrimPipe ],
  providers:    [ TrimPipe ]
})

export class PipesSharedModule {}
