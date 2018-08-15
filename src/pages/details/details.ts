import { StartUpPage } from './../start-up/start-up';
import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
codetribers=[];

firstName:string;
lastName:string;
email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.firstName=this.navParams.get('detail').firstName;
    this. lastName=this.navParams.get('detail').lastName;
    this.email=this.navParams.get('detail').email;

    console.log('ionViewDidLoad DetailsPage');
  }
goBack(){
  this.navCtrl.pop();
}
}
