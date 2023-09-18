import { Component} from '@angular/core';
import { Todo } from '../../Interfaces/Todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  selectedTab: number = 0;
  showModal: boolean = false;
  toDeleteTodo!: [Todo, number];

  constructor() { }

  changeTab(event: number){
    this.selectedTab = event
    console.log(this.selectedTab)
  }
  toggleModal(event: [Todo, number]){
    this.toDeleteTodo = event
    this.showModal = true;
  }
  closeModal(event: boolean){
    this.showModal = event;
  }
}
