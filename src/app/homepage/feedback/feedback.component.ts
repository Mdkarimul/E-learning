import { Component, OnInit } from '@angular/core';
import { nextfeedback, prevfeedback, rubber } from '../../animation';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  animations: [nextfeedback, prevfeedback, rubber]
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  public nextstate = true;
  public prevstate = false;

  public feedback: any[] = [


  {
  feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of',
  username : 'Andrew Symon',
  location: 'America',
  image : 'assets/images/user1.jpg',
  },

    {
  feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of',
  username : 'Andrew Symon',
  location: 'America',
  image : 'assets/images/user2.jpg',
  },


    {
  feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of',
  username : 'Andrew Symon',
  location: 'America',
  image : 'assets/images/user3.jpg',
  },

   {
  feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of',
  username : 'Andrew Symon',
  location: 'America',
  image : 'assets/images/user4.jpg',
  },
  ];

  public c_index = 0;


  public rubberstate = '';

  ngOnInit(): void {

  this.autoSlide();
  }



  next(): void
  {
  this.nextstate = true;
  this.prevstate = false;
  if (this.c_index < this.feedback.length - 1)
    {
     this.c_index++;

    }
    else
    {
    this.c_index = 0;
    }
  }


    prev(): void
  {
  this.nextstate = false;
  this.prevstate = true;

  if (this.c_index > 0)
    {
     this.c_index--;

    }
    else
    {
    this.c_index  = this.feedback.length - 1;
    }
  }

  autoSlide(): void
  {
   if (this.c_index < this.feedback.length - 1)
  {
  setTimeout(() => {
  this.c_index++;
  this.autoSlide();
  }, 5000);
  }
  else
  {
  this.c_index = 0;
  this.autoSlide();
  }
  }

  rubberstart(): void
  {
  this.rubberstate = 'start';
  }

  rubberend(): void
  {
  this.rubberstate = 'end';
  }

}
