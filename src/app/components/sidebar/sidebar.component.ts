import { Component, OnDestroy , OnInit} from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnDestroy, OnInit {
  

  constructor(public isMenuOpen: ToggleService)  {
  
  }
  showMenu:boolean = false
  showInformationOptions: boolean = false
  ngOnInit(): void {
    if (!this.showMenu) {
      
    }
    this.isMenuOpen.getToggleState().subscribe({
      next: (state: boolean) => {
        this.showMenu = state
        if (!this.showMenu) {
          this.showInformationOptions= false
        }
   }
 })
    
  }
  ngOnDestroy(): void {
  
  }
  showInformation() {
    this.showInformationOptions=!this.showInformationOptions
 }
 
}
