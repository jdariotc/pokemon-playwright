// Importamos test y expect de Playwright
import { test, expect } from '@playwright/test'

// Importamos las clases que creamos
import { PokemonAPI } from '../api/pokemon.api'
import { EvolutionService } from '../services/evolution.service'
import { alphabeticalSort } from '../utils/alphabeticalSort'

// Importamos fs para guardar resultados en JSON
import fs from 'fs'

// Definimos el test
test('Obtener evoluciones de Squirtle ordenadas alfabéticamente', async ({ request }) => {

  // Inicializamos las clases
  const pokemonAPI = new PokemonAPI(request)
  const evolutionService = new EvolutionService(pokemonAPI)

  // Obtenemos la cadena de evoluciones
  const evolutions = await evolutionService.getSquirtleEvolutionChain()

  // Array para guardar nombre y peso
  const pokemonInfo: { name: string; weight: number }[] = []

  // Recorremos cada Pokémon de la cadena
  for (const name of evolutions) {

    // Obtenemos los datos del Pokémon
    const data = await pokemonAPI.getPokemon(name)

    // Validamos que exista la respuesta
    expect(data).toBeTruthy()

    // Guardamos nombre y peso
    pokemonInfo.push({
      name,
      weight: data.weight
    })
  }

  // Extraemos los nombres para ordenarlos
  const sortedNames = alphabeticalSort(
    pokemonInfo.map(p => p.name)
  )

  // Reorganizamos los objetos según el orden alfabético
  const sortedPokemonInfo = sortedNames.map(name =>
    pokemonInfo.find(p => p.name === name)
  )

  // Mostramos el resultado en consola en formato tabla
  console.log('Pokémon ordenados alfabéticamente:')
  console.table(sortedPokemonInfo)

  // Guardamos el resultado en un archivo JSON
  fs.writeFileSync(
    'test-results/pokemon-info.json',
    JSON.stringify(sortedPokemonInfo, null, 2)
  )
})