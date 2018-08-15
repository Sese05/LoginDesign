import { DetailsPage } from './../details/details';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';
import {ModalController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public details=[];

  constructor(public navCtrl: NavController,public alrtCtrl:AlertController,public modalCtrl:ModalController) {

  }

register(){
   let addModal = this.modalCtrl.create(RegisterPage);
   addModal.onDidDismiss((detail) => {

    if(detail){
      this.saveDetails(detail);
    }

});

addModal.present();

 }

saveDetails(detail){
this.details.push(detail);
}
viewDetails(detail){
this.navCtrl.push(DetailsPage,{detail:detail});
}
}




