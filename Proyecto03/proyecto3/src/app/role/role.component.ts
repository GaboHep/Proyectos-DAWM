import { Component } from '@angular/core';
import { Agente, Atributo } from '../agente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  role!:Atributo;

  constructor(private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      let id = params['uuid']; 

      let agentes = JSON.parse(localStorage.getItem("agentes")!);

      const array = Object.values(agentes.data);
  
      if(agentes){
        let arrAgentes=array as Array<Agente>;
        let agenteFiltrado=arrAgentes.filter(agente=> agente["uuid"]==id)
        this.role=agenteFiltrado[0].role;
      }
      
    });
  }

}
