// Importamos la función para definir la configuración
import { defineConfig } from '@playwright/test'

// Configuración principal de Playwright
export default defineConfig({

  // Carpeta donde se encuentran los tests
  testDir: './tests',

  // Tiempo máximo permitido para cada test
  timeout: 30000,

  // Configuración de expect
  expect: {
    timeout: 5000
  },

  // Reportes generados al ejecutar los tests
  reporter: [
    ['list'], // reporte en consola
    ['html', { outputFolder: 'test-results' }] // reporte HTML
  ],

  // Configuración del entorno de ejecución
  use: {
    headless: true, // ejecución sin abrir navegador
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true
  }
})