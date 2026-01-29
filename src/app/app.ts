import { Component, signal, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, LowerCasePipe, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { ItemComponent } from './item-component/item-component';
type FriendItem = {
  id: number;
  name: string;
};
type multiItem = {
  id: number;
  name: string;
  salary: number;
};
@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    Navbar,
    Header,
    ItemComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('my-project');
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

  islogin: boolean = false;

  friend_name: FriendItem[] = [
    { id: 1, name: 'Jame' },
    { id: 2, name: 'Jeng' },
    { id: 3, name: 'John' },
  ];

  uppercase_test: string = 'Jeng';
  lowercase_test: string = 'JENG';
  salary: number = 30000;
  date_pipe: string = '01/29/2569';

  fname = signal<string>('Jeng');
  lname = signal<string>('Charat');
  fullname = computed(() => {
    return this.fname() + this.lname();
  });
  exp = signal<number>(3);
  skill = signal<string[]>(['c', 'python', 'java']);
  changename() {
    this.fname.set('change name to 2124');
  }
  addexp() {
    this.exp.update((value) => value + 1);
  }

  title: multiItem[] = [
    { id: 1, name: 'Jeng', salary: 30000 },
    { id: 2, name: 'John', salary: 25000 },
  ];
}
