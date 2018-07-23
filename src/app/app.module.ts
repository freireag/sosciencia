import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '../../node_modules/@angular/http';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProjetosPage } from '../pages/projetos/projetos';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { MobilizePage } from '../pages/mobilize/mobilize';
import { FrasesPage } from '../pages/frases/frases';
import { ProjetoDetalhePage } from '../pages/projeto-detalhe/projeto-detalhe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    FrasesPage,
    OrcamentoPage,
    TabsPage,
    ProjetoDetalhePage,
    MobilizePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios",
      backButtonText: " Voltar"
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    FrasesPage,
    OrcamentoPage,
    TabsPage,
    ProjetoDetalhePage,
    MobilizePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
