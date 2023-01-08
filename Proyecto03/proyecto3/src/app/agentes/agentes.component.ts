import { Component } from '@angular/core';
import { Agente, Atributo } from '../agente'; 

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent {

  agentes!: Agente[];

  constructor(){
    
    let agentes = JSON.parse(localStorage.getItem("agentes")!);

    const array = Object.values(agentes.data);

    if(agentes){
      this.agentes=array as Agente[]
    }
  }

}
