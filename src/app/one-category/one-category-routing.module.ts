import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneCategoryPage } from './one-category.page';

const routes: Routes = [
  {
    path: '',
    component: OneCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneCategoryPageRoutingModule {}
