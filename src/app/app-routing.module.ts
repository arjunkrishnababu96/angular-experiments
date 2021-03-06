import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: 'assets', redirectTo: '/assets', pathMatch: 'full' },
  {path: 'books', redirectTo: '/books', pathMatch: 'full' },
  {path: 'login', redirectTo: '/login', pathMatch: 'full'},
  {path: 'logout', redirectTo: '/logout', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
