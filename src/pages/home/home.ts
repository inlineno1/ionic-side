import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import {ModalPage} from "../modal/modal";
import {Profile} from "../../interface/Profile";
import {Account} from "../../interface/Account";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public profile = {} as Profile;
  private accountData = {} as Account;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) {

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

  //Prompt Alert
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E메일을 입력하세요!",
      inputs: [
        {
          name: 'name',
          placeholder: '이름 입력'
        },
        {
          name: 'email',
          placeholder: 'E메일 입력'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            console.log(data);
            this.accountData = {name:data.name, email:data.email};
            this.navCtrl.push('NavPage',{account:this.accountData});

          }
        }
      ]
    });
    prompt.present();
  }
}
