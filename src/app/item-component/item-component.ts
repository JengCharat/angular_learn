import { Component } from '@angular/core';
import { input, output } from '@angular/core';
@Component({
  selector: 'app-item-component',
  imports: [],
  templateUrl: './item-component.html',
  styleUrl: './item-component.css',
})
export class ItemComponent {
  id = input.required<number>();
  name = input.required<string>();
  salary = input<number>();
  ondelete = output<number>();
  delete_title() {
    if (confirm('sure?')) {
      alert('delte ' + this.id());
      this.ondelete.emit(this.id());
    }
  }
}
