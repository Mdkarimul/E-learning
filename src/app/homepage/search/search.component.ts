import { Component, OnInit } from '@angular/core';
import { slideInUp } from '../../animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations : [slideInUp]
})
export class SearchComponent implements OnInit {

 public title = '';
 private text = 'Design with Ednuv';
 private i = 0;
 public   cursor = '|';
 public clear:any;
  constructor() { }

  ngOnInit(): void {
    this.typeWritter();
   this.clear =  setInterval(() => {
  this.typeWritter();
  }, 300);
  }

  typeWritter(): void {
   if (this.i < this.text.length)
   {
   this.cursor = '|';
   if (this.i <= 0)
   {
   this.title = '';
   }
   this.title += this.text[this.i];
   this.i++;
  
   }
   else{
   this.cursor = '';
   this.i = 0;
   }
  }





}
