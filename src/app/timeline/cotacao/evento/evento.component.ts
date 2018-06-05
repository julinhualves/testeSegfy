import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../../timeline.service'

@Component({
  selector: 'evento-component',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  @Input() evento;
  @Input() ultimo;
  @Input() index;
  @Input() indexCotacao;

  estrelas = [];

  constructor(private timelineService:TimelineService) { }

  ngOnInit() {
    for(let i=0; i<this.evento.avaliacao; i++){
      this.estrelas.push(i);
    } 
  }

  onClickAvancar(){
  	//
  	this.timelineService.avancar(this.indexCotacao);
  }
}
