import { Component, OnInit } from '@angular/core';
import { height } from '../../animation';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations : [height]

})
export class CategoryComponent implements OnInit {

public categories: any[] =  [


  {
    name: 'Technology',
    color: '#FF1949',
    icon: 'outbound'
  },
  {
    name: 'Education',
    color: '#0EB582',
    icon: 'book'
  },
  {
    name: 'Computer',
    color: '#0093C9',
    icon: 'bug_report'
  },
  {
    name: 'Music & Video',
    color: '#0EB582',
    icon: 'missed_video_call'
  },
  {
    name: 'New releases',
    color: '#BFD131',
    icon: 'new_releases'
  },
  {
    name: 'Entertainment',
    color: '#F49B29',
    icon: 'brightness_4'
  },
  {
    name: 'Games & Vfx',
    color: '#833A8D',
    icon: 'broken_image'
  },
  {
    name: 'Stories',
    color: '#C81A7F',
    icon: 'auto_stories'
  },
];

public control = '';
public index = 0;

heightIn(i: number): void{
 this.control = 'heightIn';
 this.index = i;
}

heightOut(i: number): void{
  this.control = 'heightOut';
  this.index = i;
}

  constructor() { }

  ngOnInit(): void {
  }




}
