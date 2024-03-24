import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { MaincontentComponent } from "../../maincontent/maincontent.component";
import { FolderComponent } from "../../folders/folder/folder.component";

@Component({
    selector: 'app-page-folder',
    standalone: true,
    templateUrl: './page-folder.component.html',
    styleUrl: './page-folder.component.css',
    imports: [SidebarComponent, TopbarComponent, MaincontentComponent, FolderComponent]
})
export class PageFolderComponent {

}
