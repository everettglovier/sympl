import {animate, style, transition, trigger} from '@angular/animations';
export const fadePopInAnimation =
  trigger(
    'fadePopInAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(.9)'}),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1.1)'})),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)'})),
      ]),
    ]
  );
