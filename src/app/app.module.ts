import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '../../node_modules/@angular/http';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoDetalhePage } from '../pages/projeto-detalhe/projeto-detalhe';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { MobilizePage } from '../pages/mobilize/mobilize';
import { FrasesPage } from '../pages/frases/frases';
import { QuizPage } from '../pages/quiz/quiz';

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
    MobilizePage,
    QuizPage
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
    MobilizePage,
    QuizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
