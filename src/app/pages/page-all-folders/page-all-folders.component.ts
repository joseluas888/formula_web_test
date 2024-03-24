import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { MaincontentComponent } from "../../maincontent/maincontent.component";
import { AllFoldersComponent } from "../../folders/all-folders/all-folders.component";

@Component({
    selector: 'app-page-all-folders',
    standalone: true,
    templateUrl: './page-all-folders.component.html',
    styleUrl: './page-all-folders.component.css',
    imports: [SidebarComponent, TopbarComponent, MaincontentComponent, AllFoldersComponent]
})
export class PageAllFoldersComponent {

}
