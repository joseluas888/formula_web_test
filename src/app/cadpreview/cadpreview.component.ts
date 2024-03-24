import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadpreview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cadpreview.component.html',
  styleUrls: ['./cadpreview.component.css'],
})
export class CadpreviewComponent {

  @Output() contentChange = new EventEmitter<string>();

  onClick() {
    this.contentChange.emit('allFolders');
  }

}
