import { Component, OnInit, Input } from '@angular/core';
import { TimelineService } from '../../timeline.service'

@Component({
  selector: 'apolice-component',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {

  @Input() apolice;
  @Input() indexCotacao;
  @Input() nEventos;

  constructor(private timelineService:TimelineService) { }

  ngOnInit() {
  	console.log(this.nEventos)
  }
   onClickAvancar(){
  	//
  	this.timelineService.avancar(this.indexCotacao);

  }
}
