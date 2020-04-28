import {Directive, HostListener, Input} from '@angular/core';
import {SymplContextService} from './sympl-context.service';
@Directive({ selector: '[tooltip]' })
export class SymplTooltipDirective {
  @Input() tooltip = '';
  @Input() tooltipClass = 'dark';
  clicked = false;
  @HostListener('mouseenter', ['$event']) onmouseover( $event ) {
    //if ( !this.clicked ) {
      this.context.createTooltip($event, this.tooltip, {classes: this.tooltipClass, minWidth: '0'});
    //}
  }
  @HostListener('click', ['$event']) onclick( $event ) {
    this.clicked = true;
    setTimeout( () => {
      this.clicked = false;
    }, 10);
  }
  @HostListener('mouseout', ['$event']) onmouseout( $event ) {
    if ( !this.clicked ) {
      this.context.destroy();
    }
  }
  constructor(public context: SymplContextService ) {}
}
