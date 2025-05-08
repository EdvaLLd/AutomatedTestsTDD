import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from "./custom-button/custom-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TDD-assignment';
}
