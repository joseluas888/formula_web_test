import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Folder {
  title: string;
  lastModified: string;
  users: string[];
  files: number;
  color: string;
}

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css',
})
export class FolderComponent {
  @Output() contentChange = new EventEmitter<string>();

  onClick() {
    this.contentChange.emit('inicio');
  }

  files = [
    {
      icon: '/assets/audio-file-96.png',
      name: 'Podcast_Episodio2',
      author: 'Pedro García',
      size: '18 MB',
      dateAdded: '2024-02-10',
    },
    {
      icon: '/assets/code-file-96.png',
      name: 'Proyecto_Final',
      author: 'Laura Martínez',
      size: '5 MB',
      dateAdded: '2024-02-20',
    },
    {
      icon: '/assets/csv-96.png',
      name: 'Datos_Febrero',
      author: 'Javier Hernández',
      size: '600 KB',
      dateAdded: '2024-03-01',
    },
    {
      icon: '/assets/data-encryption-96.png',
      name: 'Claves_Seguras',
      author: 'Sergio Ramírez',
      size: '1 MB',
      dateAdded: '2024-02-25',
    },
    {
      icon: '/assets/doc-96.png',
      name: 'Informe_Anual',
      author: 'Beatriz Castillo',
      size: '2 MB',
      dateAdded: '2024-01-30',
    },
    {
      icon: '/assets/image-file-96.png',
      name: 'Diseño_Nuevo',
      author: 'Andrea Ruiz',
      size: '3 MB',
      dateAdded: '2024-02-15',
    },
    {
      icon: '/assets/important-file-96.png',
      name: 'Notas_Reunión',
      author: 'Daniel Ortega',
      size: '1.2 MB',
      dateAdded: '2024-02-18',
    },
    {
      icon: '/assets/regular-document-96.png',
      name: 'Borrador_Artículo',
      author: 'Gabriela Paredes',
      size: '800 KB',
      dateAdded: '2024-02-22',
    },
    {
      icon: '/assets/spreadsheet-file-96.png',
      name: 'Presupuesto_2024',
      author: 'Fernando Guzmán',
      size: '2.5 MB',
      dateAdded: '2024-02-28',
    },
    {
      icon: '/assets/video-file-96.png',
      name: 'Webinar_Marketing',
      author: 'Liliana Mendoza',
      size: '25 MB',
      dateAdded: '2024-02-12',
    },
    {
      icon: '/assets/xsl-96.png',
      name: 'Plantilla_Reporte',
      author: 'Roberto Alvarado',
      size: '1 MB',
      dateAdded: '2024-02-14',
    },
    {
      icon: '/assets/zip-96.png',
      name: 'Archivos_Proyecto',
      author: 'Carmen Lugo',
      size: '12 MB',
      dateAdded: '2024-02-16',
    },
    {
      icon: '/assets/pdf-96.png',
      name: 'Guía_Rápida',
      author: 'Alejandro Silva',
      size: '900 KB',
      dateAdded: '2024-02-19',
    },
    {
      icon: '/assets/ppt-96.png',
      name: 'Presentación_Ventas',
      author: 'Rosa Morales',
      size: '3.5 MB',
      dateAdded: '2024-02-21',
    },
    {
      icon: '/assets/rar-96.png',
      name: 'Recursos_Web',
      author: 'Carlos Pérez',
      size: '8 MB',
      dateAdded: '2024-02-23',
    },
    {
      icon: '/assets/read-96.png',
      name: 'Lectura_Recomendada',
      author: 'Patricia Soto',
      size: '1.8 MB',
      dateAdded: '2024-02-24',
    },
    {
      icon: 'assets/image-file-96.png',
      name: 'Rotaciones_Dec',
      author: 'María Rodríguez',
      size: '2 MB',
      dateAdded: '2024-01-05',
    },
  ];

  folders: Folder[] = [
    {
      title: 'Inner Chasis',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 4,
      color: 'blue',
    },
    {
      title: 'Ej Chasis',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 2,
      color: 'orange',
    },
    {
      title: 'Repuestos',
      lastModified: 'Febrero 22, 2024',
      users: ['assets/Jose.png', 'assets/Jose.png'],
      files: 24,
      color: 'green',
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
