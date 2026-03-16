// Importamos la clase que maneja las llamadas a la API
import { PokemonAPI } from '../api/pokemon.api'

// Servicio encargado de manejar la lógica relacionada con evoluciones
export class EvolutionService {

  // Recibe una instancia de PokemonAPI
  constructor(private pokemonAPI: PokemonAPI) {}

  // Método que obtiene la cadena de evolución de Squirtle
  async getSquirtleEvolutionChain(): Promise<string[]> {

    // Obtenemos la información de la especie de Squirtle
    const species = await this.pokemonAPI.getPokemonSpecies('squirtle')

    // Extraemos la URL donde se encuentra la cadena de evoluciones
    const evolutionUrl = species.evolution_chain.url

    const evolutionData = await this.pokemonAPI.getEvolutionChain(evolutionUrl)

    // Array donde guardaremos los nombres de los Pokémon
    const evolutions: string[] = []

    // Variable para recorrer la cadena evolutiva
    let current = evolutionData.chain

    // Recorremos la estructura hasta que no haya más evoluciones
    while (current) {

      // Guardamos el nombre del Pokémon actual
      evolutions.push(current.species.name)

      // Avanzamos al siguiente Pokémon en la cadena
      current = current.evolves_to[0]
    }

    // Retornamos la lista de nombres
    return evolutions
  }
}