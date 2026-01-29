import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../app';
@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css',
})
export class Addform {
  name3 = signal('admin');
  salary3 = signal(15000);
  addNewEmp() {
    let emp: Employee = {
      id: Math.floor(Math.random() * 1000),
      name: this.name3(),
      salary: this.salary3(),
    };
    alert('save emp data');
  }
}
