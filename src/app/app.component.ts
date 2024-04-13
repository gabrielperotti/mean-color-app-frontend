import { Component, OnInit, inject } from '@angular/core';
import { ColorService } from './color.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ColorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  colors: any[] = [];
  colorService = inject(ColorService);

  constructor() { }

  ngOnInit(): void {
    this.colorService.getColors().subscribe({
      next: (data: any) => { this.colors = data; },
      error: error => { console.error('Error fetching colors:', error); }
    });
  }
}
