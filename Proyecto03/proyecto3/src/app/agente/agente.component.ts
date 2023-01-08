import { Component } from '@angular/core';
import { Agente, Atributo } from '../agente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent {

  agente!: Agente;

  constructor(private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      let id = params['uuid']; 

      let agentes = JSON.parse(localStorage.getItem("agentes")!);

      const array = Object.values(agentes.data);
  
      if(agentes){
        let arrAgentes=array as Array<Agente>;
        let agenteFiltrado=arrAgentes.filter(agente=> agente["uuid"]==id)
        this.agente=agenteFiltrado[0];
      }
      
    });
  }

}
