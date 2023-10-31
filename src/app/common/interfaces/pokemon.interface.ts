
export interface Pokemon {
    name: string
    pokedexN: number
    img: string
    type: string[]
    description: string
}

export interface Pokeballs{
    name: string
    ratio: string
    img: string
    price: string | number
    description: string
}