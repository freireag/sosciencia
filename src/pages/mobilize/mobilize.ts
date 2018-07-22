import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '../../../node_modules/@angular/http';
import 'rxjs/add/operator/map';

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

  entidades: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.loadItems();
  }

  loadItems() {
    this.http.get('assets/data/entidades.json').map(res => res.json()).subscribe(data => {
      this.entidades = data.entidades;
    })
  }

  openSobre() {
    this.navCtrl.push('SobrePage');
  }

}
