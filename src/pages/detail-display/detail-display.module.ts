import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDisplayPage } from './detail-display';

@NgModule({
  declarations: [
    DetailDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailDisplayPage),
  ],
})
export class DetailDisplayPageModule {}
