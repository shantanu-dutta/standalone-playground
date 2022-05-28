import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, TitleComponent],
})
export class AppComponent {}
