import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  //estados e estilos
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const showStateTrigger = trigger('showStateTrigger', [
  //void => *
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '300ms',
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms',
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkedTrigger = trigger('checkedTrigger', [
  transition(
    '* => checked',
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    )
  ),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate(
      '400ms ease-out',
      keyframes([
        style({ offset: 0.5, opacity: 0, width: 0 }),
        style({ offset: 0.8, opacity: 0.5, width: '*' }),
        style({ offset: 1, opacity: 1, width: '*' }),
      ])
    ),
    // animate('400ms ease-out', style({
    //   opacity: 1,
    //   width: '*' => tamanho coringa
    // }))
  ]),
  transition(':leave', [
    animate(
      '200ms cubic-bezier(.13,.9,.8,.1)',
      style({
        opacity: 0,
        width: 0,
      })
    ),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#63B77C' })),
        animate(100, style({ transform: 'scale(1.1)' })),
      ]),
      animate(200, style({ transform: 'scale(1)' })),
    ]),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#6C757D' })),
        animate(100, style({ transform: 'scale(1.1)' })),
      ]),
      animate(200, style({ transform: 'scale(1)' })),
    ]),
  ]),
]);

export const flyInOutTrigger = trigger('flyInOut', [
  transition(':enter', [
    style({ width: '100%', transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate(
        '0.3s 0.1s ease',
        style({
          transform: 'translateX(0)',
          width: '*',
        })
      ),
      animate(
        '0.3s ease',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '0.3s ease',
        style({
          transform: 'translateX(100%)',
          width: '*',
        })
      ),
      animate(
        '0.3s 0.2s ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
]);

export const shakeTrigger = trigger('shakeAnimation', [
  //Dequalquer estado para qualquer estado
  transition('* => *', [
    query(
      'input.ng-invalid:focus, select.ng-invalid:focus',
      [
        animate(
          '0.5s',
          keyframes([
            style({ border: '2px solid red' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        stagger(200, [
          animate(
            '500ms ease-out',
            keyframes([
              style({ opacity: 1, transform: 'translateX(15%)', offset: 0.4 }),
              style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
