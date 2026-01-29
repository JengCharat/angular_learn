import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input<string>();
  title2 = input<string>();
}
