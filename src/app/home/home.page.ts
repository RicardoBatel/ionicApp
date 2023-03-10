import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public resultado: String = ""
  public pesquisa: String = ""
  public titulo: String = "Meu primeiro App"
  public imgemRandomica: String = "https://picsum.photos/seed/picsum/800/600"
  public imagemLocal: String = "../assets/icone-celular.png"
      
  constructor(private navegacao: NavController) {  }

  ngOnInit() {
  }

  recuperar(){
    this.resultado = this.pesquisa
  }

  abrirBotoes(){
    this.navegacao.navigateForward('botoes')
  }

  abrirLista(){
    this.navegacao.navigateForward('lista')
  }

  public atualiza(): void {
    this.titulo = "Texto alterado"
  }

  public acao(): void {
    this.titulo = "Botão clicado"
  }

}
