import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NAME } from '../app.routes';

export function getBooks() {
  const http = inject(HttpClient);
  return http.get('/api/books');
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  books$ = getBooks();
  readonly name = inject(NAME);
}
