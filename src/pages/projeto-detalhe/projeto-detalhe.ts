import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjetoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projeto-detalhe',
  templateUrl: 'projeto-detalhe.html',
})
export class ProjetoDetalhePage {
  projeto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projeto = this.navParams.get('projeto');
  }
  
}
