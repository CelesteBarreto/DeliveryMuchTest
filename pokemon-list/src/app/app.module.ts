import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatIconModule} from '@angular/material/icon'; 


import {MatButtonModule} from '@angular/material/button';
import { GenerateListComponent } from './pokemon-list/generate-list/generate-list.component';  
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';



import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    GenerateListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
