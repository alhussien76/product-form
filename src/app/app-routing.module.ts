import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./featureModules/products/products.module')
      .then(m => m.ProductsModule),
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
