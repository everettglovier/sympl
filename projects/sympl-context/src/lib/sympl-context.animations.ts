import {animate, state, style, transition, trigger} from '@angular/animations';
export const fadePopInAnimation =
  trigger(
    'fadePopInAnimation', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition(':enter', [
        style({opacity: 0, transform: 'scale(.9)'}),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1.1)'})),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)'})),
      ]),
      transition('true <=> false', [
        style({opacity: 1, transform: 'scale(1)'}),
        animate('50ms ease-out', style({ opacity: 1, transform: 'scale(1.1)'})),
        animate('100ms ease-out', style({ opacity: 0, transform: 'scale(.9)'})),
      ]),
    ]
  );
