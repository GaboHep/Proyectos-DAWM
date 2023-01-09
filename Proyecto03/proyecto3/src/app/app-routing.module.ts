import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AgenteComponent } from './agente/agente.component';
import { AgentesComponent } from './agentes/agentes.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path: "splash",component:SplashComponent},
  {path: "agente/:uuid",component:AgenteComponent},
  {path: "agentes",component:AgentesComponent},
  {path: "role/:uuid",component:RoleComponent},
  {path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
