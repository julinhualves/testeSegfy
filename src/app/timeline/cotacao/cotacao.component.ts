import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cotacao-component',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

	@Input() cotacao:any;
  @Input() indexCotacao;
  
	// cotacao.apolice
	// cotacao.eventos

  constructor() { }

  ngOnInit() {

  	
  }
}
