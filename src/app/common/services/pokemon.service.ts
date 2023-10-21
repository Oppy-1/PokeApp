import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import {Observable} from 'rxjs'
@Injectable({ providedIn:'root' }) 

export class PokemonService {
    private pokemonUrl = '/assets/pokemon-data/pokemon.json';
    constructor (private http: HttpClient) {}

    getPokemons (): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonUrl)
    }
}