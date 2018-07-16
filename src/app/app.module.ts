import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '../../node_modules/@angular/http';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import { ImportanciaPage } from '../pages/importancia/importancia';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetoDetalhePage } from '../pages/projeto-detalhe/projeto-detalhe';
import { MobilizePage } from '../pages/mobilize/mobilize';


@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ImportanciaPage,
    OrcamentoPage,
    TabsPage,
    ProjetoDetalhePage,
    MobilizePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ImportanciaPage,
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
