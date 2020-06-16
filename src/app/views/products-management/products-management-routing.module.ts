import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Management Product'
    },
    children: [
      {
        path: '',
        redirectTo: 'products-management'
      },
      {
        path: '',
        component: ProductsComponent,
        data: {
          title: 'Product Management'
        }
      },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
      //     title: 'Typography'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
