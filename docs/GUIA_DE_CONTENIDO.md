# Guía para ampliar el contenido

## Estructura principal

Toda la lógica y el contenido están en `assets/js/app.js`.

### Unidades

La constante `units` define los grandes bloques:

```js
{id: 0, icon: '🧭', title: 'Preparación y ruta', subtitle: 'Descripción'}
```

Los identificadores deben ser numéricos, únicos y consecutivos.

### Lecciones

```js
{
  id: 0,
  unit: 0,
  area: 'Primeros pasos',
  title: 'El mapa de licencias',
  subtitle: 'Descripción',
  icon: '🪪',
  minutes: 10,
  xp: 60,
  concepts: [],
  questions: []
}
```

### Conceptos

```js
{
  icon: '🛩️',
  title: 'Título',
  text: 'Explicación principal.',
  points: ['Primer punto.', 'Segundo punto.'],
  tip: 'Regla práctica.'
}
```

### Preguntas

```js
{
  q: 'Texto de la pregunta',
  o: ['Opción A', 'Opción B', 'Opción C'],
  a: 1,
  e: 'Explicación de la respuesta.'
}
```

`a` es el índice de la opción correcta y comienza en cero.

## Siglas y términos

Para dar ayuda contextual a una sigla, agregala a `terminology`:

```js
PPA: {
  full: 'Licencia de Piloto Privado de Avión',
  plain: 'Primera licencia para volar aviones en operaciones privadas.'
}
```

También debe existir en `glossary` para aparecer en el diccionario.

## Reglas editoriales

1. Desarrollar cada sigla antes de usarla sola.
2. Explicar primero en lenguaje cotidiano y después incorporar el término técnico.
3. No presentar valores reglamentarios sin fuente y fecha de revisión.
4. Evitar preguntas dependientes de normativa potencialmente desactualizada.
5. Separar comprensión conceptual de técnica práctica de vuelo.
6. Advertir cuando algo sólo deba practicarse con instructor.

## Compatibilidad de datos

No cambiar sin migración explícita:

```js
const STORAGE_KEY = 'alaAzulStateV1';
```

Cambiar identificadores o el orden de preguntas puede desvincular puntuaciones, notas y repasos. Para preservar el progreso:

- agregar nuevas lecciones al final cuando sea posible;
- no reutilizar identificadores eliminados;
- mantener estables las preguntas ya publicadas;
- probar la importación de un respaldo anterior.

## Verificación antes de publicar

- Abrir sin errores de consola.
- Completar una lección.
- Probar respuestas correctas e incorrectas.
- Cerrar y abrir para comprobar persistencia.
- Exportar e importar un respaldo.
- Revisar escritorio y teléfono.
- Verificar enlaces oficiales.
