import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Folder {
  title: string;
  lastModified: string;
  users: string[];
  files: number;
  color: string;
}

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css',
})
export class FoldersComponent {

  folders: Folder[] = [
    {
      title: 'Chasis',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 4,
      color: 'blue',
    },
    {
      title: 'Motor',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 2,
      color: 'orange',
    },
    {
      title: 'Llantas',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 24,
      color: 'green',
    },
    {
      title: 'Electrónicos',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 13,
      color: 'purple',
    },
    {
      title: 'Demo',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 4,
      color: 'blue',
    },
    {
      title: 'Demo',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 4,
      color: 'blue',
    },
    {
      title: 'Demo',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 4,
      color: 'blue',
    },
    // Agrega más objetos de carpetas aquí...
  ];

  isMenuOpen: boolean[] = [];

  getBgColor(folder: Folder) {
    return `bg-${folder.color}-200`;
  }

  getBgNumColor(folder: Folder) {
    return `bg-${folder.color}-100`;
  }
}
