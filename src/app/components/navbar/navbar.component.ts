import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  constructor(public toggleState: ToggleService ){}
  isMenuOpen = false
  ngOnInit(): void {
    this.toggleState.getToggleState().subscribe({
      next: (state: boolean) => {
        this.isMenuOpen = state;
    }
  })
    
  }
  toggleMenu() {
    this.toggleState.setToggleState(!this.isMenuOpen)
   
  }
}
