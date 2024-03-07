import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadpreviewComponent } from "../cadpreview/cadpreview.component";
import { FoldersComponent } from "../folders/folders.component";
import { RecentComponent } from "../recent/recent.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { FolderComponent } from "../folders/folder/folder.component";
import { AllFoldersComponent } from "../folders/all-folders/all-folders.component";



@Component({
    selector: 'app-maincontent',
    standalone: true,
    templateUrl: './maincontent.component.html',
    styleUrl: './maincontent.component.css',
    imports: [CommonModule, CadpreviewComponent, FoldersComponent, RecentComponent, FavoriteComponent, FolderComponent, AllFoldersComponent]
})

export class MaincontentComponent {


  // Se cambiara todo a Servicios en la prox. ver.
  
  content: string;
  currentFolder : any;

    constructor() {
    this.content = 'inicio'; 
  }
  
  oncontentChange(newcontent: string) {
    this.content = newcontent;
  }

  onFolderChange(folder: any) {
    this.currentFolder = folder;
  }

}
