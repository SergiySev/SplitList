import {Directive, ElementRef, OnInit, OnDestroy, Renderer2, Output, EventEmitter, Input} from '@angular/core';
import {TrimPipe} from '../../pipes/tirm/trim.pipe';

@Directive({
  selector: '[appMouseHover]',
})
export class MouseHoverDirective implements OnInit, OnDestroy {

  @Input() interactive = true;
  @Output() selected: EventEmitter<string>;

  private unlisteners;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private trimPipe: TrimPipe) {
    this.selected = new EventEmitter();
  }

  ngOnInit() {
    if (this.interactive) {
      this.unlisteners = [
        this.renderer.listen( this.elementRef.nativeElement, 'mouseover', (event) => this.mouseRollOver(event.target) ),
        this.renderer.listen( this.elementRef.nativeElement, 'mouseout', (event) => this.mouseRollOut(event.target) ),
        this.renderer.listen( this.elementRef.nativeElement, 'mouseleave', (event) => this.mouseRollOut(event.target)),
        this.renderer.listen( this.elementRef.nativeElement, 'click', (event) => this.mouseClick(event.target)),
      ];
    }
  }

  ngOnDestroy(): void {
    if (this.unlisteners) {
      for (const unlistener of this.unlisteners) {
        unlistener();
      }
    }
  }

  private getCssKlasses(elem): string[] {
    return elem.className.split(' ') || [];
  }

  private addCssKlass(elem, klass) {
    const cssKlasses = this.getCssKlasses(elem);
    if (cssKlasses.every(cssKlass => cssKlass !== klass)) {
      elem.className = this.trimPipe.transform([...cssKlasses, klass].join(' '));
    }
  }

  private removeCssKlass(elem, klass) {
    const cssKlasses = this.getCssKlasses(elem);
    const filtered = cssKlasses.filter(e => e !== klass);
    elem.className = this.trimPipe.transform(filtered.join(' '));
  }

  private mouseRollOver(elem) {
    if (!!this.getCssKlasses(elem).indexOf('selected'))  {
      this.addCssKlass(elem, 'hover');
    }
  }

  private mouseRollOut(elem) {
      this.removeCssKlass(elem, 'hover');
  }

  private mouseClick(elem) {
    // this.addCssKlass(elem, 'selected');
    this.removeCssKlass(elem, 'hover');
    this.selected.emit(elem);
  }

}
