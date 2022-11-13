import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavcontrolService {

public subject = new Subject();
  constructor() { }

  routpath(path: string): void
  {
  this.subject.next(path);
  }
}
