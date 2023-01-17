import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneCategoryPageRoutingModule } from './one-category-routing.module';

import { OneCategoryPage } from './one-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneCategoryPageRoutingModule
  ],
  declarations: [OneCategoryPage]
})
export class OneCategoryPageModule {}
