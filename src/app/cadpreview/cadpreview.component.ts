import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadpreview',
  standalone: true,
  imports: [],
  templateUrl: './cadpreview.component.html',
  styleUrls: ['./cadpreview.component.css'],
})
export class CadpreviewComponent {

  @Output() contentChange = new EventEmitter<string>();

  onClick() {
    this.contentChange.emit('allFolders');
  }

}
