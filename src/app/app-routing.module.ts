import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {EditComponent} from "./Todo/components/edit/edit.component";
import {TodosComponent} from "./Todo/components/todos/todos.component";

const routes: Routes = [
  {path: '', component: TodosComponent, pathMatch: 'full'},
  {path: 'edit/:id', component: EditComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
