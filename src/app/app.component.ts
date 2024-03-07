import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { TopbarComponent } from "./shared/topbar/topbar.component";
import { MaincontentComponent } from "./maincontent/maincontent.component";
import { CadpreviewComponent } from "./cadpreview/cadpreview.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SidebarComponent, TopbarComponent, MaincontentComponent, CadpreviewComponent]
})
export class AppComponent {
  title = 'formula_web';
}
