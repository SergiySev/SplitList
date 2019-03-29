import {Component, OnInit, OnDestroy, Renderer2, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {TrimPipe} from '../../../pipes/tirm/trim.pipe';
import {EventBusService} from '../services/event-bus/event-bus.service';

@Component({
  selector: 'app-inputer',
  templateUrl: './inputer.component.html',
  styleUrls: ['./inputer.component.scss']
})
export class InputerComponent implements OnInit, OnDestroy {

  private eventListener;
  @ViewChild('inp') inputElem;
  @Input() placeholderText;

  constructor(private renderer: Renderer2, private trimPipe: TrimPipe, private eventBus: EventBusService) {
  }

  ngOnInit() {
    const elem = this.inputElem.nativeElement;

    this.eventListener = this.renderer.listen(elem, 'keydown', (event) => {
      if (event.key.toLowerCase() === 'enter') {
        const inputValue = this.trimPipe.transform(elem.value);
        if (inputValue) {
          this.eventBus.saveInput(inputValue);
          elem.value = '';
          this.eventBus.showInput(false);
        }
      } else if (event.key.toLowerCase() === 'escape') {
        elem.value = '';
        this.eventBus.showInput(false);
      }
    });
  }

  ngOnDestroy() {
    this.eventListener();
  }
}
