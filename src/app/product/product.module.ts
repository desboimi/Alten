import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductsComponent } from './products/products.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    ProductAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    RatingModule,
    TagModule,
    ToastModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DropdownModule
  ]
})
export class ProductModule { }
