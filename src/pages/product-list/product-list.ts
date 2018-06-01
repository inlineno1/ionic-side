import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {Product} from "../../interface/Product";
import {RestProvider} from "../../providers/rest/rest";
import {ProductDeatilPage} from "../product-deatil/product-deatil";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  productObservable:Observable<Product[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider,  private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productObservable = this.restProvider.getProducts();
  }

  navToDetail(product:Product) {
    this.navCtrl.push("ProductDeatilPage", {"product":product})
  }

  createProduct() {
    this.navCtrl.push("ProductDeatilPage");
  }

  deleteProduct(productId:number){
    this.restProvider.deleteProductById(productId).subscribe((product)=>{
      console.log(product);
      this.showMessage("Product Id "+ productId+ " has been removed!");
      this.navCtrl.setRoot("ProductListPage");
    })
  }

  showMessage(message: string) {
    this.toastCtrl.create({message: message, showCloseButton: true, duration: 3000, position: 'middle'}).present();
  }
}
