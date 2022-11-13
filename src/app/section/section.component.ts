import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavcontrolService } from '../services/navcontrol.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private rout: Router, private navcontrol: NavcontrolService) { }

  ngOnInit(): void {
  }

  getroutpath(): void
  {
  this.navcontrol.routpath(this.rout.url);
  }

}
