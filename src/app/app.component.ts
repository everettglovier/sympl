import {Component, ViewChild} from '@angular/core';
import {SymplContextService} from "../../projects/sympl-context/src/lib/sympl-context.service";
import {SymplSpinnerService} from "../../projects/sympl-spinner/src/lib/sympl-spinner.service";
import {SymplModalService} from "../../projects/sympl-modal/src/lib/modal.service";
import {BlockComponent} from 'ngx-color/block';
import {SketchComponent} from "ngx-color/sketch";
import {ChromeComponent} from "ngx-color/chrome";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('template', { static: false }) template;
  title = 'sympl';
  variable = "WOAAA";
  constructor( public context: SymplContextService, public spinner: SymplSpinnerService, public modal: SymplModalService  ) {

  }
  object = {};
  controls = [
    {name: 'test', type: 'text', label: 'test' },
    {name: 'test', type: 'datepicker', label: 'test' },
    {name: 'dfghj', type: 'picker', options: {display: 'bubble', select: 'multiple'}, label: 'Multi', data: [
          {value: 1, text: '1'},
          {value: 2, text: '2'},
          {value: 3, text: '3'},
          {value: 4, text: '4'},
          ]},
    {name: 'test', type: 'timepicker', label: 'test' },
    {name: 'test', type: 'color', label: 'test' },
    {name: 'f', type: 'file', label: 'test' },
    {name: 'df', type: 'switch', label: 'test' },
    {name: 'form', type: 'form', label: 'Form Options', button: () => { alert() }, buttonText: 'Add NEws', controls: [
        {name: 'fieldName', type: 'text', label: 'Field Name' },
      ]
    },
  ];
  submit($event) {
    console.log( $event, this.object );
  }
  list($event) {
    this.spinner.show();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000);
    this.context.createList($event.target, { items: [
      {label: 'Test', type: 'item'},
      {label: 'Test', type: 'item', handler: () => { alert(); }},
      {label: 'Test', type: 'item'},
      {label: 'Test', type: 'item'},
      ], focused: true});
  }

  createModal() {
    this.modal.create( { component: ChromeComponent }, { closeButton: false } );
  }

  createContext( $event ) {
    this.context.create({ origin: $event, component: ChromeComponent });
  }
}
