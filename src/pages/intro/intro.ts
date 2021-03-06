import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;

  //showSkip = true;
  nextMsg = "Próximo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextAction() {
    if (this.slides.isEnd()) {
      this.startApp();
    } else {
      this.slides.slideNext();
    }
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  /*updateShowSkip() {
    this.showSkip = !this.slides.isEnd();
  }*/

  updateNextMsg() {
    if (this.slides.isEnd()) {
      this.nextMsg = "Continuar";
    } else {
      this.nextMsg = "Próximo";
    }
  }

}
