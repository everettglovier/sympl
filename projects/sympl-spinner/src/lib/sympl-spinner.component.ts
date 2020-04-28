import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {SymplSpinnerService} from "./sympl-spinner.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'sympl-spinner',
  styleUrls: ['./sympl-spinner.component.scss'],
  template: `
    <div class="spinner">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <div class="percentage" *ngIf="percentage">{{ percentage }}</div>
  `,
  animations: [trigger(
    'fadePopAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('100ms ease', style({ opacity: 1, transform: 'scale(1.1)'})),
        animate('100ms ease', style({ opacity: 1, transform: 'scale(1)'})),
      ]),
      transition(':leave', [
        style({opacity: 1, transform: 'scale(1)'}),
        animate('100ms ease', style({ opacity: 1, transform: 'scale(1.1)'})),
        animate('100ms ease', style({ opacity: 0, transform: 'scale(0)'}))
      ])
    ]
  )]
})
export class SymplSpinnerComponent {
  @HostBinding('@fadePopAnimation')
  @Input() percentage;
  constructor() {}
}
