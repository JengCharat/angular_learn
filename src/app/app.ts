import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
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

  cat_img: string =
    'https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg';
  width: number = 700;
  height: number = 350;
  Hello() {
    alert('hello');
  }

  username: string = 'Jeng twoway ';
}
