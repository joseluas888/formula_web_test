import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { MaincontentComponent } from "../../maincontent/maincontent.component";
import { FolderComponent } from "../../folders/folder/folder.component";
import { CadpreviewComponent } from "../../cadpreview/cadpreview.component";

@Component({
    selector: 'app-pagepreview',
    standalone: true,
    templateUrl: './page-preview.component.html',
    styleUrl: './page-preview.component.css',
    imports: [SidebarComponent, TopbarComponent, MaincontentComponent, CadpreviewComponent]
})
export class PagepreviewComponent {

}
