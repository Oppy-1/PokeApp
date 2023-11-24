export interface Pokemon {
  name: string;
  pokedexN: number;
  img: string;
  type: string[];
  description: string;
  skill: Skill[];

}

export interface Pokeballs {
  name: string;
  ratio: string | number;
  img: string;
  price: string | number;
  info: string;
  generation: string;
}
export interface Types {
  type: string;
  strong: string[];
  weak: string[];
  immune: string;
  img: string;
  information: string;
  ineffective: string[];
  hability: string;
}

export interface Skill {
  name: string;
  power: string;
  percent: string;
  description: string;
  type: string;
  level: string;
}
