import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'sympl-context-tooltip',
  template: '<div class="tooltip" [innerHTML]="tooltip"></div>',
  styleUrls: ['./sympl-context-list.component.scss'],
})
export class SymplTooltipComponent {
  @Input() tooltip = '';
  constructor() {}
}
