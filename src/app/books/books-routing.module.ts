import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';


const bookRoutes: Routes = [
  {
    path: 'books',
    children: [
      { path: 'list', component: BooklistComponent},
      { path: 'detail', component: BookdetailComponent}
    ]
  }
  // {path: 'books/list', component: BooklistComponent},
  // {path: 'books/detail', component: BookdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
