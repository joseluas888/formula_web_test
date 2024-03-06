import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadpreviewComponent } from "../cadpreview/cadpreview.component";
import { FoldersComponent } from "../folders/folders.component";
import { RecentComponent } from "../recent/recent.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { FolderComponent } from "../folder/folder.component";
import { AllFoldersComponent } from "../all-folders/all-folders.component";



@Component({
    selector: 'app-maincontent',
    standalone: true,
    templateUrl: './maincontent.component.html',
    styleUrl: './maincontent.component.css',
    imports: [CommonModule, CadpreviewComponent, FoldersComponent, RecentComponent, FavoriteComponent, FolderComponent, AllFoldersComponent]
})
export class MaincontentComponent {
  //inicio, preview, folder, allFolders

  //debe iniciar en" inicio"
  content: string;

    constructor() {
    this.content = 'inicio'; // Inicializa la content en el constructor
  }
  
  oncontentChange(newcontent: string) {
    this.content = newcontent;
  }

}
