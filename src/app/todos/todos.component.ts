import { animate, trigger, state, transition, style } from '@angular/animations';
import { Component } from '@angular/core';
import { slide } from '../animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    slide
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

