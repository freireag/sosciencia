import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { FrasesPage } from '../frases/frases';
import { OrcamentoPage } from '../orcamento/orcamento';
import { MobilizePage } from '../mobilize/mobilize';
import { QuizPage } from '../quiz/quiz';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrcamentoPage;
  tab2Root = ProjetosPage;
  tab3Root = FrasesPage;
  tab4Root = MobilizePage;
  tab5Root = QuizPage;

  constructor() {

  }
}
