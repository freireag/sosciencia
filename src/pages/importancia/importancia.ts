import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '../../../node_modules/@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-importancia',
  templateUrl: 'importancia.html'
})
export class ImportanciaPage {

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

}
