import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  //estados e estilos
  state('default', style({
    border: '2px solid #B2B6FF',
  })),state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })), transition('default => highlighted', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])

export const showStateTrigger = trigger('showStateTrigger', [
  //void => *
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('300ms',
      style({
        opacity: 1
      })
    )
  ]),
  transition(':leave', [
    animate('300ms', style({
      opacity: 0
    }))
  ])
])

export const  checkedTrigger = trigger('checkedTrigger', [
  transition('* => checked', animate('400ms ease-in', style({
    transform: 'scale(0.4)'
  })))
])
