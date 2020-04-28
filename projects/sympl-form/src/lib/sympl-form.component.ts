import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormControlInterface} from './sympl-form.interface';
import {ChangeDetectorRef} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {isArray} from 'util';
import {MbscColorOptions, MbscDatetimeOptions, MbscSelectOptions} from '@mobiscroll/angular';

declare let google: any;

@Component({
  selector: 'sympl-form',
  templateUrl: './sympl-form.component.html',
  styleUrls: ['./sympl-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(100)
      ]),
      transition(':leave',
        animate(100, style({opacity: 0})))
    ])
  ]
})
export class SymplFormComponent implements OnInit, AfterViewInit {
  @ViewChild('location', {static: false}) address: any;
  @ViewChild('lat', {static: false}) lat: any;
  @ViewChild('lng', {static: false}) lng: any;
  @ViewChild('city', {static: false}) city: any;
  @ViewChild('state', {static: false}) state: any;
  @ViewChild('zip', {static: false}) zip: any;
  @Input() controls: [FormControlInterface];
  @Input() submitText = 'Submit';
  @Input() submitButton = true;
  @Input() errors = [];
  @Input() buttons: any = [];
  @Input() object: any = {};
  @Output() submitted = new EventEmitter();
  @Output() change = new EventEmitter();
  attemptSubmit = false;
  client;
  nonFormSettings: MbscDatetimeOptions = {
    headerText: '{value}',
    responsive: {
      small: {
        display: 'bubble'
      },
      medium: {
        headerText: false,
        touchUi: false,
        showSelector: false,
      }
    },
  };
  dateSetting: MbscDatetimeOptions = {
    headerText: '{value}',
    responsive: {
      small: {
        display: 'bubble'
      },
      medium: {
        headerText: false,
        touchUi: false
      }
    }
  };
  colorSetting: MbscColorOptions = {
    mode: 'refine'
  };
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{list: 'ordered'}, {list: 'bullet'}],
      [{indent: '-1'}, {indent: '+1'}],          // outdent/indent
      ['clean'],                                         // remove formatting button
      ['link']                         // link and image, video
    ]
  };
  formGroups = ['text', 'email', 'number', 'tel', 'password', 'select', 'typeahead', 'textarea', 'datepicker', 'multipicker', 'picker', 'timepicker', 'datetimepicker', 'daterange', 'quill', 'paragraph', 'color', 'file', 'switch'];
  inputGroups = ['text', 'email', 'number', 'tel', 'password'];
  constructor(public cd: ChangeDetectorRef, public zone: NgZone) {
  }
  ngOnInit() {
    for (const control of this.controls) {
      if (control.type === 'datepicker' && this.object && this.object[control.name] && this.object[control.name].toDate) {
        this.object[control.name] = this.object[control.name].toDate();
      }
      if (control.type === 'datetimepicker' && this.object && this.object[control.name] && this.object[control.name].toDate) {
        this.object[control.name] = this.object[control.name].toDate();
      }
      if (control.type === 'timepicker' && this.object && this.object[control.name] && this.object[control.name].toDate) {
        this.object[control.name] = this.object[control.name].toDate();
      }
      if (control.type === 'address') {
        this.initMap();
      }
    }
  }
  ngAfterViewInit() {

  }
  openFileDialog( control ) {
    document.getElementById( control.name ).click();
  }
  fileChange( $event, control ) {
    if ( $event.target.files ) {
      this.object[control.name] = $event.target.files[0];
      const reader: any = new FileReader();
      reader.onload = (e) => {
        control.thumb = e.target.result;
      };
      reader.readAsDataURL($event.target.files[0]);
    }
  }
  initMap() {
    setTimeout(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.address.nativeElement,
        {
          componentRestrictions: {country: 'US'},
          types: []  // 'establishment' / 'address' / 'geocode',
        });
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        const location = [place.geometry.location.lat(), place.geometry.location.lng()];
        this.zone.run(() => {
          for (const control of this.controls) {
            if (control.type === 'address') {
              this.object[control.name] = place.formatted_address;
              this.object[control.zipName] = '';
              this.object[control.stateName] = '';
              this.object[control.cityName] = '';
              this.object[control.latName] = '';
              this.object[control.lngName] = '';
              for (const component of place.address_components) {
                for (const type of component.types) {
                  if (type === 'postal_code') {
                    this.object[control.zipName] = component.long_name;
                  }
                  if (type === 'administrative_area_level_1') {
                    this.object[control.stateName] = component.short_name;
                  }
                  if (type === 'locality' || type === 'sublocality') {
                    this.object[control.cityName] = component.long_name;
                  }
                  this.object[control.latName] = location[0];
                  this.object[control.lngName] = location[1];
                }
              }
            }
          }
        });
        this.cd.detectChanges();
      });
    }, 1000);
  }
  onSubmit() {
    this.submitted.emit(this.object);
  }
  async handle(control, button) {
    await button.handler(control, this.object[control.name]);
    this.change.emit();
  }
  evaluateCondition(control) {
    if (control.condition) {
      const condition = control.condition;
      let conditionMet = false;
      switch (condition.operator) {
        case '==':
          conditionMet = this.object[condition.field] === condition.value;
          break;
        case '!=':
          conditionMet = this.object[condition.field] !== condition.value;
          break;
        case '>':
          conditionMet = this.object[condition.field] > condition.value;
          break;
        case '<':
          conditionMet = this.object[condition.field] < condition.value;
          break;
        case '>=':
          conditionMet = this.object[condition.field] >= condition.value;
          break;
        case '<=':
          conditionMet = this.object[condition.field] <= condition.value;
          break;
        case 'contains':
          conditionMet = isArray(this.object[condition.field]) && this.object[condition.field].indexOf(condition.value) > -1;
          break;
        case '!in':
          conditionMet = condition.value.indexOf(this.object[condition.field]) < 0;
          break;
        case 'in':
          conditionMet = condition.value.indexOf(this.object[condition.field]) > -1;
          break;
      }
      if (!conditionMet) {
        this.object[control.name] = null;
      }
      return conditionMet;
    } else {
      return true;
    }
  }
  changeCallback(control) {
    if (control.callback) {
      control.callback(control, this.object);
    }
  }
  newItem( control ) {
    if ( !this.object[control.name] ) {
      this.object[control.name]  = [];
    }
    this.object[control.name].push({});
  }
  deleteItem( control, i ) {
    console.log( i );
    this.object[control.name].splice( i, 1 );
  }
}
