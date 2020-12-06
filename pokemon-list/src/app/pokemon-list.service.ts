import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from './shared/model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };
  

}
