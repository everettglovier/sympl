import { Component } from '@angular/core';
import {SymplContextService} from "../../projects/sympl-context/src/lib/sympl-context.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sympl';
  constructor( public context: SymplContextService ) {

  }

  click( $event ) {
    $event.preventDefault();
    $event.stopPropagation();
    this.context.createList( $event, { items: [{ type: 'item', label: 'Test', handler: () => { return true; } }] });
  }
}
