import {trigger, state, animate, transition, style, query, stagger, group} from '@angular/animations';

export const fadeInAnimation =
  trigger(
    'fadeInAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease', style({ opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('400ms', style({opacity: 0 }))
      ])
    ]
  );

export const fadePopAnimation =
  trigger(
    'fadePopAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(.9)'}),
        animate('300ms ease', style({ opacity: 1, transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        style({opacity: 0, transform: 'scale(1)'}),
        animate('300ms ease', style({ opacity: 0, transform: 'scale(.9)'}))
      ])
    ]
  );
