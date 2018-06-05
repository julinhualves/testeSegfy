import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TimelineComponent } from './timeline/timeline.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component:HomeComponent },
	{ path: 'cadastro', component:CadastroComponent },
	{ path: 'timeline', component:TimelineComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]

})
export class AppRoutingModule { }  

