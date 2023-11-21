import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  //injeção de dependência, quer dizer que estou inserindo um objeto
  //que poderá consumir dados da internet (httpClient).
  constructor(private http: HttpClient) { 

  }

  //Vamos listar os dados para serem 'trabalhados' no component.ts
  listarCharacters(): any{
    return this.http.get<any[]>('https://hp-api.onrender.com/api/characters');
  }
}
