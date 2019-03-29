import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventBusService} from '../services/event-bus/event-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;
  @Input() buttonText: string;
  @Input() placeholderText: string;
  @Input() isButtonVisible: boolean;

  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
  }

  addRow() {
    this.eventBus.showInput(true);
  }

}
