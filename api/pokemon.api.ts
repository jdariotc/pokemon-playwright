// Importamos el tipo APIRequestContext de Playwright
// Este objeto permite hacer solicitudes HTTP dentro de los tests
import { APIRequestContext } from '@playwright/test'

// Clase encargada de centralizar las llamadas a la API de Pokémon
export class PokemonAPI {

  // El constructor recibe el objeto request que Playwright proporciona
  // Este request será utilizado para hacer las llamadas HTTP
  constructor(private request: APIRequestContext) {}

  // Método para obtener la información de un Pokémon específico
  async getPokemon(name: string) {

    // Realiza una petición GET al endpoint de Pokémon
    const res = await this.request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

    // Validamos que la respuesta sea correcta
    if (res.status() !== 200) {
      throw new Error(`Error obteniendo Pokémon ${name}`)
    }

    // Retornamos el JSON de la respuesta
    return res.json()
  }

  // Método para obtener la información de la especie del Pokémon
  // Esto es necesario para acceder a la cadena de evoluciones
  async getPokemonSpecies(name: string) {

    const res = await this.request.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)

    if (res.status() !== 200) {
      throw new Error(`Error obteniendo especie ${name}`)
    }

    return res.json()
  }
    // Obtener la cadena de evolución usando la URL que devuelve la API
   async getEvolutionChain(url: string) {

    const res = await this.request.get(url)

    if (res.status() !== 200) {
      throw new Error('Error obteniendo cadena de evolución')
    }

    return res.json()
  }
}
