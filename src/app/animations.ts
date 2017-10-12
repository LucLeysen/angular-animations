import { trigger, state, style, transition, animate } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translate(-10px)' }),
        animate(500)
    ]),
    transition(':leave', [
        animate(500, style({ transform: 'translate(-100%)' }))
    ])
]);

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(2000)
    ])
]);
