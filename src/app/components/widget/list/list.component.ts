import {Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {EventBusService} from '../services/event-bus/event-bus.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() headerText: string;
  @Input() buttonText: string;
  @Input() placeholderText: string;
  @Input() emptyText: string;
  @Input() selectedId: string;
  @Input() interactive: boolean;
  @Input() list: any[];

  public showInput = false;
  private showInputSubscription: Subscription;

  constructor(private renderer: Renderer2, private eventBus: EventBusService) { }

  ngOnInit() {
    this.showInputSubscription = this.eventBus.showInputEvent.subscribe(bool => { this.showInput = bool; });
  }

  ngOnDestroy() {
    this.showInputSubscription.unsubscribe();
  }

  trackByFn(index, item) {
    return item.uuid;
  }

  selected(natElem) {
    this.eventBus.selectRow(natElem.id);
  }

}
