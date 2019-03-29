import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class EventBusService {

  private showInput$: Subject<boolean>;
  private saveInput$: Subject<string>;
  private selectRow$: Subject<any>;

  constructor() {
    this.showInput$ = new Subject();
    this.saveInput$ = new Subject();
    this.selectRow$ = new Subject();
  }

  public get showInputEvent() {
    return this.showInput$.asObservable();
  }

  public showInput(bool: boolean) {
    this.showInput$.next(bool);
  }

  public get saveInputEvent() {
    return this.saveInput$.asObservable();
  }

  public saveInput(val: string) {
    this.saveInput$.next(val);
  }

  public get selectRowEvent() {
    return this.selectRow$.asObservable();
  }

  public selectRow(val: any) {
    this.selectRow$.next(val);
  }
}
