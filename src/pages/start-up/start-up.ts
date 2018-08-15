
import { DetailDisplayPage } from './../detail-display/detail-display';
import { DetailsPage } from './../details/details';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the StartUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-up',
  templateUrl: 'start-up.html',
})
export class StartUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }
  signIn():void{
    this.navCtrl.push(DetailDisplayPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartUpPage');
  }
  register(){
    this.navCtrl.push(HomePage);
  }
}
