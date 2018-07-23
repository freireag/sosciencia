import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '../../../node_modules/@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-frases',
  templateUrl: 'frases.html'
})
export class FrasesPage {

  frases: any;

  constructor(public navCtrl: NavController, public http: Http) {
    
  }

  ionViewDidLoad() {
    this.loadItems();
  }

  loadItems() {
    this.http.get('assets/data/frases.json').map(res => res.json()).subscribe(data => {
      this.frases = data.frases;
    })
  }

  openSobre() {
    this.navCtrl.push('SobrePage');
  }

}
