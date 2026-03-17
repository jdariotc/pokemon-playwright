README.md
# Prueba Técnica Automatización – Playwright + TypeScript

## Descripción

Este proyecto implementa una prueba de integración utilizando **Playwright con TypeScript** contra la API pública [PokéAPI](https://pokeapi.co/api/v2/pokemon/).

El objetivo del test es:

1. Obtener la cadena de evoluciones de **Squirtle**.
2. Extraer nombre y peso (`weight`) de cada Pokémon en la cadena.
3. Ordenar los Pokémon alfabéticamente **sin utilizar `.sort()`**, usando la función manual `alphabeticalSort`.
4. Mostrar los resultados en consola.
5. Guardar los resultados en un archivo JSON.
6. Generar un reporte HTML de Playwright.

---

## Estructura del proyecto


pokemon-playwright-pom/
│
├── api/
│ └── pokemon.api.ts # Lógica de consumo de la API de Pokémon
│
├── services/
│ └── evolution.service.ts # Lógica de negocio (cadena de evoluciones)
│
├── utils/
│ └── alphabeticalSort.ts # Algoritmo de ordenamiento manual
│
├── tests/
│ └── pokemonEvolution.spec.ts # Test de integración Playwright
│
├── test-results/ # Reportes y JSON de salida
│
├── playwright.config.ts
├── package.json
└── README.md


---

## Descripción de carpetas

- **api/**: Contiene métodos para consumir la API pública.  
  - Incluye `getEvolutionChain(url: string)` para obtener la cadena de evoluciones de forma centralizada.
- **services/**: Lógica de negocio, usa métodos de la API para construir la cadena de evoluciones.  
- **utils/**: Funciones reutilizables, como `alphabeticalSort` para ordenar sin `.sort()`.  
- **tests/**: Contiene los tests de Playwright que validan la integración.  
- **test-results/**: Carpeta donde se generan reportes HTML y archivos JSON.

---

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd pokemon-playwright-pom

Instalar dependencias:

npm install

Instalar navegadores de Playwright:

npx playwright install
Ejecución de tests

Ejecutar todos los tests:

npx playwright test

Ejecutar tests y generar reporte HTML:

npx playwright test --reporter=list,html

Abrir el reporte HTML:

npx playwright show-report
Resultados esperados
Consola

Lista de Pokémon ordenados alfabéticamente con su peso:

Pokémon ordenados alfabéticamente:
┌─────────┬────────────┬───────
│ (index) │ name       │ weight │
├─────────┼────────────┼────────┤
│ 0       │ blastoise  │ 855    │
│ 1       │ squirtle   │ 90     │
│ 2       │ wartortle  │ 225    │
└─────────┴────────────┴────────┘
Archivo JSON

Se genera en test-results/pokemon-info.json:

[
  { "name": "blastoise", "weight": 855 },
  { "name": "squirtle", "weight": 90 },
  { "name": "wartortle", "weight": 225 }
]
Criterios de aceptación cumplidos

Todas las solicitudes a la API responden con status 200.

Se obtienen correctamente los nombres y pesos de la cadena de evoluciones.

La lista se ordena alfabéticamente sin usar .sort().

Se muestran los resultados en consola y JSON.

Se genera un reporte HTML de ejecución.

Requisitos

Node.js >= 18

NPM

Playwright

Conexión a internet para consumir PokéAPI

Buenas prácticas aplicadas

Separación clara de responsabilidades: API → Service → Utils → Test.

Métodos de API manejan errores de status != 200.

Algoritmo de ordenamiento manual (alphabeticalSort).

Arquitectura escalable y fácil de mantener.

💡 Consejo antes de entregar:

Sube el proyecto a un repositorio público de GitHub.

Asegúrate de que estén incluidas estas carpetas y archivos:

api/
services/
utils/
tests/
playwright.config.ts
package.json
README.md