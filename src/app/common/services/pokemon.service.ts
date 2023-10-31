import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokeballs, Pokemon } from '../interfaces/pokemon.interface';
import {Observable, map} from 'rxjs'
@Injectable({ providedIn:'root' }) 

export class PokemonService {
    private pokemonUrl = '/assets/pokemon-data/pokemon.json';
    private pokeballsUrl = '/assets/pokemon-data/pokeballs.json';
    constructor (private http: HttpClient) {}
    getPokemons (filter: string): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
            map((data: Pokemon[])=>{
                return data.filter((res:Pokemon)=> res.name.toLowerCase().includes(filter))
            })
        )
 
    }
    getPokeballs(): Observable<Pokeballs[]>{
        return this.http.get<Pokeballs[]>(this.pokeballsUrl)
    }
}