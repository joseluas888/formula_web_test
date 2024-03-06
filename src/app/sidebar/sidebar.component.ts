import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  selectedItem = "Inicio";

  selectItem(item: string) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }
  
}
