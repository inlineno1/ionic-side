import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDeatilPage } from './product-deatil';

@NgModule({
  declarations: [
    ProductDeatilPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDeatilPage),
  ],
})
export class ProductDeatilPageModule {}
