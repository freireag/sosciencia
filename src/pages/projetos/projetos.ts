import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html'
})
export class ProjetosPage {
  projetos:any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad() {
    this.loadItems();
  }

  loadItems() {
    this.http.get('assets/data/projetos.json').map(res => res.json()).subscribe(data => {
      this.projetos = data.projetos;
    })
  }

}
