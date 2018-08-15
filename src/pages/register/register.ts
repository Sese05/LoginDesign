import { DetailDisplayPage } from './../detail-display/detail-display';
import { DetailsPage } from './../details/details';
import { HomePage } from './../home/home';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  confirmpassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
saveDetails(){

  let newProfile ={

    firstName: this.firstName,
    lastName: this.lastName,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmpassword,
  
  };

this.viewCtrl.dismiss(newProfile)
  }
  
back(){
  this.navCtrl.push(HomePage);
}
close(){
  this.viewCtrl.dismiss();
}
}
