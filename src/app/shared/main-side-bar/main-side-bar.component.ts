import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-side-bar',
    standalone: true,
    templateUrl: './main-side-bar.component.html',
    styleUrl: './main-side-bar.component.css',
    imports: [SidebarComponent, CommonModule]
})
export class MainSideBarComponent {
  showSecondSideBar = false;

  selectItem(item: string) {
    if (item === 'files') {
      this.showSecondSideBar = !this.showSecondSideBar;
    }
  }
}
