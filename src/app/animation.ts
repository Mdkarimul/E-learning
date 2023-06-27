import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { animate } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { query } from '@angular/animations';


export const shrinksection = trigger('shrinksection', [
state('minimize', style({
  marginLeft : '60px'
})),
state('maximize', style({
  marginLeft : '250px'
})),
transition('*<=>*', [
animate('0.2s'),
]),
]);



export const shrinknav = trigger('shrinknav', [
state('minimize', style({
  width : '60px'
})),
state('maximize', style({
  width : '250px'
})),
transition('*<=>*', [
animate('0.2s'),
]),
]);

export const sticky = trigger('stickynav', [
    state('start', style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    })),
     state('end', style({
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: '0 8px 16px 0 #ddd',
        width : '100%'
    })),
    transition('start=>end', [
    style({
    top: '-100px',
    }),
   animate('0.5s'),
    ]),
]);


export const slideInUp = trigger('slideInUp', [
 transition('*<=>*', [
 style({
 position : 'relative',
 top : '800px',
 left: 0
 }),
 animate('0.5s', style({
 top : 0,
 left: 0
 })),
 ]),
    ]);


export const height = trigger('height', [
      state('heightIn', style({
        height : '100%',
      })),
       state('heightOut', style({
        height : '2%',
      })),
      transition('*=>*', [
       animate('0.2s'),
      ]),
    ]);


export const zoom = trigger('zoom', [
     state('zoomIn', style({
     transform : 'scale(1.1) rotate(7deg)',
     })),
       state('zoomOut', style({
     transform : 'scale(1)',
     })),
     transition('*<=>*', [
    animate('0.3s'),
     ]),
    ]);


export const slideshows = trigger('slideshows', [
transition(':enter', [
style({
    opacity: 0,
    position: 'absolute',
}),
animate('1s', style({
    opacity: 1,
    position: 'absolute',
})),
]),


transition(':leave', [
style({
    opacity: 1,
    position: 'absolute',
}),
animate('1s', style({
    opacity: 0,
    position: 'absolute'
})),
]),
    ]);


export const slideToggle = trigger('slideToggle', [
       state('up', style({
       position: 'relative',
       top: '0px',
       })),
        state('down', style({
       position: 'relative',
       top: '60px',
       })),
       transition('*<=>*', [
      animate('0.2s'),
       ]),
    ]);


export const nextfeedback  = trigger('nextfeedback', [
  transition(':enter', [
    style({
  position: 'relative',
  left: '-100%'
    }),
    animate('300ms', style({
    left: 0,
    })),
  ]),
    ]);



export const prevfeedback  = trigger('prevfeedback', [
  transition(':enter', [
    style({
  position: 'relative',
  left: '100%'
    }),
    animate('300ms', style({
    left: 0,
    })),
  ]),
    ]);


export const rubber = trigger('rubber', [

  state('start', style({
  width: '75%',
  })),
  state('end', style({
  width: '80%',
  })),
  transition('*<=>*', [
 animate('0.2s'),
  ]),
    ]);


export const fade = trigger('fade', [
   transition(':enter', [
   style({
   opacity: 0,
   }),
   animate('1s', style({
   opacity: 1,
   })),
    ]),



     transition(':leave', [
   style({
   opacity: 1,
   }),
   animate('1s', style({
   opacity: 0,
   })),
    ]),
]);





