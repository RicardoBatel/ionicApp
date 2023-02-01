import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: String = "Meu primeiro App"
  public imgemRandomica: String = "https://picsum.photos/seed/picsum/800/600"
  public imagemLocal: String = "../assets/icone-celular.png"

  public atualiza(): void {
    this.titulo = "Texto alterado"
  }

  public acao(): void {
    this.titulo = "Botão clicado"
  }

}
