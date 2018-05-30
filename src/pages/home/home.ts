import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {Profile} from "../../interface/Profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public profile = {} as Profile;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  modal() {
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {

      console.log(data);

      if (data !== undefined) {
        this.profile.actionSwitch = data.actionSwitch;
        this.profile.domestic = data.domestic;
        this.profile.gender = data.gender;
        this.profile.name = data.name;
        this.profile.startDate = data.startDate;
        console.log(data.actionSwitch);
        console.log(data.name);
        console.log(data.gender);
        console.log(data.domestic);
        console.log(data.startDate);
      }
    });
    modal.present();
  }
}
