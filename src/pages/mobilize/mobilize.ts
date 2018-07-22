import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MobilizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mobilize',
  templateUrl: 'mobilize.html',
})
export class MobilizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openSobre() {
    this.navCtrl.push('SobrePage');
  }

}
