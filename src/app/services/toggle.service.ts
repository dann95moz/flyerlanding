import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public toggleSubject = new BehaviorSubject<boolean>(false)
  constructor() { }
  setToggleState(value: boolean)  { 
    this.toggleSubject.next(value)
  }
  getToggleState() {
    return  this.toggleSubject.asObservable()
  }
}
