import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TimelineService } from '../timeline/timeline.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

	tipoSeguro = [
		{value:"carro", nome: "Automóvel"},
		{value:"casa", nome: "Residencial"},
		{value:"vida", nome: "Seguro de Vida"}
	]
	
	seguradoras = [
		{value: "Azul", nome: "Azul"},
		{value: "Alfa", nome: "Alfa"}
	]

	tipoSeguroEscolhido;
	seguradoraEscolhida;

  constructor(private router: Router,
  			  private timelineService: TimelineService) { }

  ngOnInit() {
  }

  changeTipoSeguro(tipoSeguro){
    this.tipoSeguroEscolhido = tipoSeguro;
  }
  changeSeguradora(seguradora){
    this.seguradoraEscolhida = seguradora;
  }

  onClickAddSinistro(){
  	let nomeSegurado = (document.getElementById("nomeSegurado") as HTMLInputElement).value;
    let nApolice = (document.getElementById("nApolice") as HTMLInputElement).value;
    //
    this.timelineService.novoSinistro(nomeSegurado, this.seguradoraEscolhida, nApolice, this.tipoSeguroEscolhido);
    this.router.navigateByUrl('/timeline');
  }

}
