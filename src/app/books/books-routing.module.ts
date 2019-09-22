import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AuthGuard } from '../auth/auth.guard';


const bookRoutes: Routes = [
  {
    path: 'books',
    canActivate: [AuthGuard],
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
