import { Component, OnInit, Inject } from '@angular/core';

import { TimelineService } from './timeline.service'

@Component({
  selector: 'timeline-component',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  cotacoes;
  cotacaoIndex;
  action = false;
  avancar = false;
  mensagem = false;
  destinatario;
  avaliacao;

  destinatarios = [
    {value: 'Segurado', viewValue: 'segurado'},
    {value: 'Seguradora', viewValue: 'seguradora'}
  ];

  avaliacoes = [
    {value: 1, viewValue: 'péssimo'},
    {value: 2, viewValue: 'ruim'},
    {value: 3, viewValue: 'regular'},
    {value: 4, viewValue: 'bom'},
    {value: 5, viewValue: 'ótimo'}
  ];
  
  constructor(private timelineService:TimelineService) { }

  onClickAddEvento(){

    let nomeEvento = (document.getElementById("nomeEvento") as HTMLInputElement).value;
    let obsEvento = (document.getElementById("obsEvento") as HTMLInputElement).value;
    //
    console.log(nomeEvento, obsEvento);
    this.cotacoes[this.cotacaoIndex].eventos.push(
      {
          "titulo": nomeEvento,
          "tipoEvento": "acao",
          "mensagem": "",
          "observacao": obsEvento
      }
    )
    this.onClickCancelar();
  }

  onClickAddMensagem(){

    let nomeMensagem = (document.getElementById("nomeMensagem") as HTMLInputElement).value;
    let corpoMenagem = (document.getElementById("corpoMensagem") as HTMLInputElement).value;
    //
    this.cotacoes[this.cotacaoIndex].eventos.push(
      {
          "titulo": nomeMensagem,
          "tipoEvento": "mensagem",
          "mensagem": corpoMenagem,
          "direcao" : this.destinatario,
          "observacao": ""
      }
    )
    this.onClickCancelar();
  }
   onClickConcluir(){

    let obsConclusao = (document.getElementById("obsConclusao") as HTMLInputElement).value;
    //
    this.cotacoes[this.cotacaoIndex].eventos.push(
      {
          "titulo": "Processo concluído.",
          "tipoEvento": "conclusao",
          "avaliacao" : this.avaliacao,
          "observacao": "obsConclusao"
            
      }
    )
    this.onClickCancelar();
  }

  onClickCancelar () {
    this.action = false;
    this.avancar = false;
    this.mensagem = false;
  }

  changeDestinatario(destinatario){
    this.destinatario = destinatario;
    console.log(destinatario)
  }

  changeAvaliacao(avaliacao){
    this.avaliacao = avaliacao;
    console.log(avaliacao)
  }


  ngOnInit() {

    this.cotacoes = this.timelineService.cotacoes;

    this.timelineService.avancarEmitter.subscribe(
        res => {
            console.log(res)
            //
            this.cotacaoIndex = res;
            this.action = true;
        }
    )

    /*this.timelineService.novoSinistroEmitter.subscribe(
        res => {
            console.log(res)
            //
            this.cotacoes.push(res)
            this.router.navigateByUrl('/timeline');
        }
    )
    */
  	
  }
}



