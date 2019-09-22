import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetlistComponent } from './assetlist/assetlist.component';


const routes: Routes = [
  {path: 'assets/list', component: AssetlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
