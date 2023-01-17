import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-form',
    loadChildren: () => import('./product-form/product-form.module').then(m => m.ProductFormPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then(m => m.EditProductPageModule)
  },
  {
    path: 'one-product/:id',
    loadChildren: () => import('./one-product/one-product.module').then(m => m.OneProductPageModule)
  },
  {
    path: 'category-form',
    loadChildren: () => import('./category-form/category-form.module').then(m => m.CategoryFormPageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./category-list/category-list.module').then(m => m.CategoryListPageModule)
  },
  {
    path: 'edit-category/:id',
    loadChildren: () => import('./edit-category/edit-category.module').then(m => m.EditCategoryPageModule)
  },
  {
    path: 'one-category/:id',
    loadChildren: () => import('./one-category/one-category.module').then(m => m.OneCategoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
