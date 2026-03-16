// Función que ordena un arreglo de strings alfabéticamente
// utilizando el algoritmo Bubble Sort
export function alphabeticalSort(arr: string[]): string[] {

  // Creamos una copia del arreglo original
  const sorted = [...arr]

  // Guardamos la longitud del arreglo
  const n = sorted.length

  // Primer loop para recorrer todos los elementos
  for (let i = 0; i < n - 1; i++) {

    // Segundo loop para comparar elementos adyacentes
    for (let j = 0; j < n - i - 1; j++) {

      // Comparamos los valores en minúscula para evitar problemas de mayúsculas
      if (sorted[j].toLowerCase() > sorted[j + 1].toLowerCase()) {

        // Intercambiamos posiciones
        const temp = sorted[j]
        sorted[j] = sorted[j + 1]
        sorted[j + 1] = temp
      }
    }
  }

  // Retornamos el arreglo ordenado
  return sorted
}