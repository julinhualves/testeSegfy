import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TimelineService {

    avancarEmitter = new EventEmitter;
    novoSinistroEmitter = new EventEmitter;

    cotacoes = [
        {
            "apolice" :  {
                "nomeSegurado": "Julio",
                "nomeSeguradora": "Alpha Seguros",
                "nApolice": "1234345",
                "tipoDoBem": "carro"
            },
            "eventos" : [
                {
            "titulo": "Verificar Documentação nescessária",
                    "tipoEvento": "acao",
                    "mensagem": "",
                    "observacao": "cheklist doc nescessários para esta segura, neste tipo de sinistro."
                    
                },
                {
            "titulo": "Documentos nescessários",
                    "tipoEvento": "mensagem",
                    "direcao":"Segurado",
                    "mensagem": "Caro Segurado, favor enviar cópia dos documentos X, Y, e Z, autenticados.",
                    "observacao": ""

                },
                {
            "titulo": "Validação de Documetos",
                    "tipoEvento": "acao",
                    "mensagem": "",
                    "observacao": "Válidar documentos e encaminhar para seguradora."
                }
            ]
        },
        {
            "apolice" :  {
                "nomeSegurado": "Adriana",
                "nomeSeguradora": "Azul Seguros",
                "nApolice": "1234345",
                "tipoDoBem": "casa"
            },
            "eventos" : [
                {
            "titulo": "Verificar Documentação necessária",
                    "tipoEvento": "acao",
                    "mensagem": "",
                    "observacao": "- Cópia escritura"
                },
                {
            "titulo": "Documentos nescessários",
                    "tipoEvento": "mensagem",
                    "direcao":"Segurado",
                    "mensagem": "Caro Segurado, favor enviar coópia dos documentos X, Y, e Z, autenticados.",
                    "observacao": ""
                },
                {
            "titulo": "Validação de Documetos",
                    "tipoEvento": "acao",
                    "mensagem": "",
                    "observacao": "Válidar documentos e encaminhar para seguradora."
                },
                {
            "titulo": "Envio de documentos ",
                    "tipoEvento": "mensagem",
                    "direcao":"Seguradora",
                    "mensagem": "Cara seguradora, estou enviando os docs. referentes ao sinistro X, onde ...",
                    "observacao": ""
                },
                {
            "titulo": "Re: Documentos nescessários",
                    "tipoEvento": "mensagem",
                    "direcao":"corretor",
                    "mensagem": "",
                    "observacao": ""
                },
          {
            "titulo": "Concluído",
            "tipoEvento": "conclusao",
            "direcao":"",
            "mensagem": "",
            "observacao": "Caso concluído",
            "avaliacao": "4"

          }
            ]
        }
    ]

  constructor() { }

    avancar(cotacaoIndex){
        
        this.avancarEmitter.emit(cotacaoIndex)
    }
    //
    novoSinistro(nomeSegurado, seguradora, nApolice, tipoSeguro){

    	let cotacao = {
    		"apolice" : {
	  			"nomeSegurado": nomeSegurado,
	  			"nomeSeguradora": seguradora,
	  			"nApolice": nApolice,
	  			"tipoDoBem": tipoSeguro
	  		},
	  		"eventos":[]
    	}
        this.cotacoes.push(cotacao);
    }
}
