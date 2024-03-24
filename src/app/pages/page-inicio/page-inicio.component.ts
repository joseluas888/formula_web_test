import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { MaincontentComponent } from "../../maincontent/maincontent.component";
import { FoldersComponent } from "../../folders/folders.component";
import { FavoriteComponent } from "../../favorite/favorite.component";
import { RecentComponent } from "../../recent/recent.component";
import { MainSideBarComponent } from "../../shared/main-side-bar/main-side-bar.component";

@Component({
    selector: 'app-page-inicio',
    standalone: true,
    templateUrl: './page-inicio.component.html',
    styleUrl: './page-inicio.component.css',
    imports: [SidebarComponent, TopbarComponent, MaincontentComponent, FoldersComponent, FavoriteComponent, RecentComponent, MainSideBarComponent]
})
export class PageInicioComponent {

}
