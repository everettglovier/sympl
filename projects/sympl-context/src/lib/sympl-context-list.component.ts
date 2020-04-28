import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'sympl-context-list',
  templateUrl: './sympl-context-list.component.html',
  styleUrls: ['./sympl-context-list.component.scss'],
})
export class SymplContextListComponent implements OnInit {
  @Output() destroy = new EventEmitter();
  @Input() items;
  @Input() focused = false;
  @Input() focusedChild = -1;
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if ( this.focused ) {
      event.preventDefault();
      event.stopPropagation();
      this.itemHandler(event, this.items[this.focusedChild]);
    }
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ( this.focused ) {
      if (event.key === 'ArrowDown') {
        this.focusedChild++;
      }
      if (event.key === 'ArrowUp') {
        this.focusedChild--;
      }
      if (this.focusedChild < 0) {
        this.focusedChild = 0;
      }
      if (this.focusedChild >= this.items.length) {
        this.focusedChild = this.items.length - 1;
      }
    }
  }
  constructor() {}
  itemHandler( $event, item ) {
    $event.preventDefault();
    $event.stopPropagation();
    if ( item.handler( $event ) ) {}
    if ( !item.preventDefault ) {
      this.destroy.emit( true );
    }
  }
  preventBubble( $event ) {
    $event.stopImmediatePropagation();
    $event.preventDefault();
    $event.stopPropagation();
  }
  ngOnInit() {
    if ( this.focused ) {
      this.focusedChild = 0;
    }
  }
}
