import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý danh mục sản phẩm'
    },
    children: [
      {
        path: '',
        redirectTo: 'category'
      },
      {
        path: '',
        component: CategoryComponent,
        data: {
          title: 'Chi tiết danh mục'
        }
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
