import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAME } from '../app.routes';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  readonly name = inject(NAME);
}
