import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css',
})
export class Addform {
  name3 = signal('admin');
  salary3 = signal(15000);
}
