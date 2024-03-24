import { Routes } from '@angular/router';
import {PageInicioComponent} from "./pages/page-inicio/page-inicio.component"
import { PageFolderComponent } from './pages/page-folder/page-folder.component';
import { PagepreviewComponent } from './pages/page-preview/page-preview.component';
import { PageAllFoldersComponent } from './pages/page-all-folders/page-all-folders.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';


export const routes: Routes = [
  { path: 'inicio', component: PageInicioComponent },
  { path: 'preview', component: PagepreviewComponent },
  { path: 'folder', component: PageFolderComponent },
  { path: 'allfolders', component: PageAllFoldersComponent },
  { path: 'login', component: PageLoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
