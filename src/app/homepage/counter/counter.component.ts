import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  public no_of_ins = 0;
  public no_of_clients =0;
  public no_of_projects = 0;
  public no_of_branches = 0;

  ngOnInit(): void {

  }



  count_ins(): void
  {
  if (this.no_of_ins < 50)
  {
   setTimeout(() => {
    this.no_of_ins++;
    this.count_ins();

   }, 100);
  }
  }

    count_clients(): void
  {
  if (this.no_of_clients < 700)
  {
   setTimeout(() => {
    this.no_of_clients++;
    this.count_clients();

   }, 40);
  }
  }


      count_projects(): void
  {
  if (this.no_of_projects < 700)
  {
   setTimeout(() => {
    this.no_of_projects++;
    this.count_projects();

   }, 25);
  }
  }


        count_branches(): void
  {
  if (this.no_of_branches < 2000)
  {
   setTimeout(() => {
    this.no_of_branches++;
    this.count_branches();

   }, 15);
  }
  }


  @HostListener('window:scroll')
  enablecounter(): void
  {
  const count: any = document.getElementById('count-box');
  const x: any = count.offsetTop;
  if (window.scrollY + 420 > x)
  {
    if (sessionStorage.getItem('counter') == null)
    {
    sessionStorage.setItem('counter', 'true');
    this.count_ins();
    this.count_clients();
    this.count_projects();
    this.count_branches();
    }
  }

  }

}
