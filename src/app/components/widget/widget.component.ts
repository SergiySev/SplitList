import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventBusService} from './services/event-bus/event-bus.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [EventBusService]
})
export class WidgetComponent implements OnInit, OnDestroy {

  @Input() headerText: string;
  @Input() buttonText: string;
  @Input() placeholderText: string;
  @Input() emptyText: string;
  @Input() selectedId: string;
  @Input() parentId: string;
  @Input() list;
  @Input() interactive = true;
  @Input() canAdd = true;

  @Output() save: EventEmitter<string>;
  @Output() select: EventEmitter<string>;

  constructor(private eventBus: EventBusService) {
    this.save = new EventEmitter();
    this.select = new EventEmitter();
  }

  ngOnInit() {
    this.eventBus.saveInputEvent.subscribe(label => this.save.emit(label));
    this.eventBus.selectRowEvent.subscribe(id => this.select.emit(id));
  }

  ngOnDestroy() {
  }

  buttonVisibility() {
    return this.canAdd || this.parentId;
  }
}
