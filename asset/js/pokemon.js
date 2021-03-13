
const Pokemon = {
    get: async id => {
        let poke = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}` ).then( x => x.json() )
        let playload = {
            name: poke.species.name,
            image: poke.sprites.other.dream_world.front_default
        }
        return playload
    },
    rand: () => Math.floor( Math.random() * (150 - 1) + 1 ) + 1
}

export { Pokemon }