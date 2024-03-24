import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recent.component.html',
  styleUrl: './recent.component.css'
})
export class RecentComponent {

  isMenuOpen: boolean[] = [];

  files = [
    { icon: '/assets/audio-file-96.png', name: 'Podcast_Episodio1', author: 'Juan Pérez', size: '15 MB', dateAdded: '2024-01-10' },
    { icon: 'assets/code-file-96.png', name: 'Code_Sus', author: 'Ana Sánchez', size: '3 MB', dateAdded: '2024-02-15' },
    { icon: 'assets/csv-96.png', name: 'Datos_Enero', author: 'Carlos López', size: '500 KB', dateAdded: '2024-02-01' },
    { icon: 'assets/image-file-96.png', name: 'Rotaciones_Dec', author: 'María Rodríguez', size: '2 MB', dateAdded: '2024-01-05' },
    { icon: '/assets/doc-96.png', name: 'Informe_Semestral', author: 'Luis Torres', size: '1.5 MB', dateAdded: '2024-01-20' },
    { icon: '/assets/pdf-96.png', name: 'Manual_Usuario', author: 'Patricia Méndez', size: '800 KB', dateAdded: '2024-01-28' },
    { icon: '/assets/video-file-96.png', name: 'Tutorial_Suspension', author: 'Ricardo Jiménez', size: '20 MB', dateAdded: '2024-02-10' },
    { icon: '/assets/zip-96.png', name: 'Recursos_Diseño', author: 'Sofía Guzmán', size: '10 MB', dateAdded: '2024-02-05' },
];

}
