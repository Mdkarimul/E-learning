import { Component, OnInit } from '@angular/core';
import { zoom } from '../../animation';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations : [zoom]
})
export class CoursesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public tabform = this.fb.group({
  label : [''],
  thumbnail: [''],
  title: [''],
  description: [''],
  nos: [''],
  nol: [''],
  fee: ['']
  });
  public tabs: any[] = [

{
	label : 'New courses',
	content: [

	       {
	thumbnail : 'assets/images/courses1.jpg',
	title : 'Html tutorial',
	description : 'Learn how to using hypertext markup language',
	nos : 10,
	nol : 6,
	fee : 200
},

{
	thumbnail : 'assets/images/courses2.jpg',
	title : 'Css tutorial',
	description : 'It is a long  will be distracted by the readable',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses3.jpg',
	title : 'Java tutorial',
	description : 'There are many variations  available, but the majority have',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses4.jpg',
	title : 'Sql tutorial',
	description : 'The standard chunk of Lorem   below for those interested.',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses5.jpg',
	title : 'Php tutorial',
	description : 'But I must explain idea of denouncing pleasure ',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses6.jpg',
	title : 'Bootstrap tutorial',
	description : 'On the other hand,  and dislike men who are so ',
	nos : 20,
	nol : 12,
	fee : 1230
},
	],
},


{
	label : 'Trending courses',
	content: [

	       {
	thumbnail : 'assets/images/courses1.jpg',
	title : 'Html tutorial',
	description : 'Learn how to using hypertext markup language',
	nos : 10,
	nol : 6,
	fee : 200
},

{
	thumbnail : 'assets/images/courses2.jpg',
	title : 'Css tutorial',
	description : 'It is a long  will be distracted by the readable',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses3.jpg',
	title : 'Java tutorial',
	description : 'There are many variations  available, but the majority have',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses4.jpg',
	title : 'Sql tutorial',
	description : 'The standard chunk of Lorem   below for those interested.',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses5.jpg',
	title : 'Php tutorial',
	description : 'But I must explain idea of denouncing pleasure ',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses6.jpg',
	title : 'Bootstrap tutorial',
	description : 'On the other hand,  and dislike men who are so ',
	nos : 20,
	nol : 12,
	fee : 1230
},
	],
},



{
	label : 'Upcoming courses',
	content: [

	       {
	thumbnail : 'assets/images/courses1.jpg',
	title : 'Html tutorial',
	description : 'Learn how to using hypertext markup language',
	nos : 10,
	nol : 6,
	fee : 200
},

{
	thumbnail : 'assets/images/courses2.jpg',
	title : 'Css tutorial',
	description : 'It is a long  will be distracted by the readable',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses3.jpg',
	title : 'Java tutorial',
	description : 'There are many variations  available, but the majority have',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses4.jpg',
	title : 'Sql tutorial',
	description : 'The standard chunk of Lorem   below for those interested.',
	nos : 20,
	nol : 12,
	fee : 1230
},


{
	thumbnail : 'assets/images/courses5.jpg',
	title : 'Php tutorial',
	description : 'But I must explain idea of denouncing pleasure ',
	nos : 20,
	nol : 12,
	fee : 1230
},

{
	thumbnail : 'assets/images/courses6.jpg',
	title : 'Bootstrap tutorial',
	description : 'On the other hand,  and dislike men who are so ',
	nos : 20,
	nol : 12,
	fee : 1230
},
	],
},


  ];



public index = 0;
public control = '';

  ngOnInit(): void {
  }

  zoomIn(i: number): void{
  this.control = 'zoomIn';
  this.index = i;

  }

  zoomOut(i: number): void{
this.control = 'zoomOut';
this.index = i;
  }


  delete(index: number): void{
    this.tabs.splice(index, 1);
  }

  addtab(): void{
  this.tabs.push({
   label: this.tabform.value.label,
   content : [
   {
    thumbnail : this.tabform.value.thumbnail,
	title : this.tabform.value.title,
	description : this.tabform.value.description,
	nos : this.tabform.value.nos,
	nol : this.tabform.value.nol,
	fee : this.tabform.value.fee
	}
   ]
  });
  console.log(this.tabform.value);
  }

}
