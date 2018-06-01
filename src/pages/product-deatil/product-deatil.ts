import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Product} from "../../interface/Product";

// import {RestProvider} from "../../providers/rest/rest";
import {unescapeHtml} from "@angular/platform-browser/src/browser/transfer_state";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductDeatilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-deatil',
  templateUrl: 'product-deatil.html',
})
export class ProductDeatilPage {

  product: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest: RestProvider, private toastCtrl: ToastController) {
    this.product = new Product(this.navParams.get('product'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDeatilPage');
  }

  saveProduct(product: Product) {

    console.log(product);
    if (product.id) {
      console.log('update');
      this.rest.updateProduct(product).subscribe(pro => {
        this.product = pro;
        this.showMessage("Product : " +  this.product.id + ' ' + this.product.name + " 수정");
        this.navCtrl.setRoot('ProductListPage');
      });
    } else {
      console.log('create');
      this.rest.createProduct(product).subscribe(res => {
        this.product = res;
        this.showMessage("Product : " +  this.product.id + ' ' + this.product.name + " 등록");
        this.navCtrl.setRoot("ProductListPage");
      });
    }
  }

  deleteProduct(productId:number){
    this.rest.deleteProductById(productId).subscribe((product)=>{
      console.log(product);
      this.showMessage("Product Id "+ productId+ " has been removed!");
      this.navCtrl.setRoot("ProductListPage");
    })
  }

  showMessage(message: string) {
    this.toastCtrl.create({message: message, showCloseButton: true, duration: 3000, position: 'middle'}).present();
  }
}
