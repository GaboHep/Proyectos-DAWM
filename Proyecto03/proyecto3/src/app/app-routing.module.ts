import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AgenteComponent } from './agente/agente.component';
import { AgentesComponent } from './agentes/agentes.component';

const routes: Routes = [
  {path: "splash",component:SplashComponent},
  {path: "agente/:uuid",component:AgenteComponent},
  {path: "agentes",component:AgentesComponent},
  {path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
