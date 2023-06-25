import { Component, OnInit } from '@angular/core';
import { slideshows, slideToggle } from '../../animation';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  animations: [slideshows, slideToggle]
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  public images: any[] = [
      {
      path : 'assets/images/fa.jpg',
      title: 'Html tutorial',
      description: 'Html stands for hypertext markup language',
      link: 'https://google.com'
      },
       {
      path : 'assets/images/fb.jpg',
      title: 'CSS tutorial',
      description: 'Html stands for hypertext markup language',
      link: 'https://google.com'
      },

       {
      path : 'assets/images/fc.jpg',
      title: 'JS tutorial',
      description: 'Html stands for hypertext markup language',
      link: 'https://google.com'
      },

       {
      path : 'assets/images/fd.jpg',
      title: 'SQL tutorial',
      description: 'Html stands for hypertext markup language',
      link: 'https://google.com'
      },

  ];

public index = 0;
  public btnState = 'down';
  public c_index = 0;
  ngOnInit(): void {

  this.slideShows();
  }
  slideShows(): void{
  if (this.index < this.images.length - 1)
  {
    setTimeout(() => {
    this.index++;
    this.slideShows();
    }, 5000);
  }
  else
  {
  this.index = 0;
  this.slideShows();
  }

  }

  slideUp(i: number): void{
  this.btnState = 'up';
  this.c_index = i;

  }

  slideDown(i: number): void{
  this.btnState = 'down';
  this.c_index = i;



  }

}
