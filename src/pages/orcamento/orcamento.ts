import { Component, Renderer2 } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html'
})
export class OrcamentoPage {

  constructor(public navCtrl: NavController, private renderer: Renderer2) {

  }

  ionViewDidLoad() {
    /*!function(e,t,n,s) {
      var i="InfogramEmbeds",
        o=e.getElementsByTagName(t)[0],
        d=/^http:/.test(e.location)?"http:":"https:";
      if (/^\/{2}/.test(s)&&(s=d+s),window[i]&&window[i].initialized)
        window[i].process&&window[i].process();
      else if (!e.getElementById(n)) {
        var a=e.createElement(t);a.async=1,a.id=n,a.src=s,o.parentNode.insertBefore(a,o)
      }
    } (document,"script","infogram-async","https://e.infogram.com/js/dist/embed-loader-min.js");*/
    
    
    var page = this.navCtrl.first().pageRef().nativeElement;
    var parent = page;
    for (let num of Array(7)) {
      parent = this.renderer.parentNode(parent);
    };
    const body = parent;

    const script = this.renderer.createElement("script");
    script.async = 1;
    script.id = "infogram-async";
    script.src = "https://e.infogram.com/js/dist/embed-loader-min.js";

    this.renderer.appendChild(body, script);
  }

  openSobre() {
    this.navCtrl.push('SobrePage');
  }
}
