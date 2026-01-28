import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project');
  name: String = 'Jeng';
  age: number = 20;
  birth_year: number = 2548;
  cal_year(): number {
    return this.birth_year - 543;
  }
}
