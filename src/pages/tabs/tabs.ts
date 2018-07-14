import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { ImportanciaPage } from '../importancia/importancia';
import { OrcamentoPage } from '../orcamento/orcamento';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrcamentoPage;
  tab2Root = ProjetosPage;
  tab3Root = ImportanciaPage;

  constructor() {

  }
}
