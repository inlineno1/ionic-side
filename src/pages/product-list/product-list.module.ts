import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import {OrderModule} from "ngx-order-pipe";


@NgModule({
  declarations: [
    ProductListPage,
  ],
  imports: [
    OrderModule,
    IonicPageModule.forChild(ProductListPage)
  ],
})
export class ProductListPageModule {}
