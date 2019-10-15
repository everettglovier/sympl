import {
  Component, EventEmitter,
  Input, Output
} from '@angular/core';
import {SymplContextService} from "./sympl-context.service";
@Component({
  selector: 'sympl-context-list',
  templateUrl: './sympl-context-list.component.html',
  styleUrls: ['./sympl-context-list.component.scss'],
})
export class SymplContextListComponent {
  @Output() destroy = new EventEmitter();
  @Input() items;
  constructor() {}
  itemHandler( $event, item ) {
    $event.preventDefault();
    $event.stopPropagation();
    if ( item.handler( $event ) ) {

    }
    if ( !item.preventDefault ) {
      this.destroy.emit( true );
    }
  }
  preventBubble( $event ) {
    $event.stopImmediatePropagation();
    $event.preventDefault();
    $event.stopPropagation();
  }
}
