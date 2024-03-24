import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Folder {
  title: string;
  lastModified: string;
  users: string[];
  files: number;
  color: string;
}

@Component({
  selector: 'app-all-folders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-folders.component.html',
  styleUrl: './all-folders.component.css',
})
export class AllFoldersComponent {

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
