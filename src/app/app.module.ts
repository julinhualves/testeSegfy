import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CotacaoComponent } from './timeline/cotacao/cotacao.component';
import { ApoliceComponent } from './timeline/cotacao/apolice/apolice.component';
import { EventoComponent } from './timeline/cotacao/evento/evento.component';


import { TimelineService } from './timeline/timeline.service';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    TimelineComponent,
    CotacaoComponent,
    ApoliceComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, 
    MatSelectModule, MatInputModule, BrowserAnimationsModule, MatGridListModule, MatTabsModule, MatButtonModule
  ],
  
  providers: [TimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
