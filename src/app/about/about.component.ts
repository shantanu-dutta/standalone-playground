import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAME } from '../app.routes';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readonly name = inject(NAME);
}
