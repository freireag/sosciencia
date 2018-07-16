import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-importancia',
  templateUrl: 'importancia.html'
})
export class ImportanciaPage {

  constructor(public navCtrl: NavController) {

  }

  openSobre() {
    this.navCtrl.push('SobrePage');
  }

}
