import { Component } from '@angular/core';
import { ToggleService } from './services/toggle.service';
import { SampleData } from './sampleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isMenuOpen: boolean = false;
  sampleData= SampleData
  constructor(public toggleState: ToggleService) {
    
  }
  ngOnInit(): void {
    this.toggleState.getToggleState().subscribe({
      next: (state: boolean) => {
        this.isMenuOpen = state;
    }
  })
    
  }
}
