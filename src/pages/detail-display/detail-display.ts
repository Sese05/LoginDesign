import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { Service } from './../../app/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StartUpPage } from '../start-up/start-up';

/**
 * Generated class for the DetailDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-display',
  templateUrl: 'detail-display.html',
})
export class DetailDisplayPage {
    codetribers=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:Service) {

    this.codetribers=this.service.getcodetribers()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDisplayPage');
  }
gotodetail(index:number){
this.navCtrl.push(RegisterPage);
}

}
