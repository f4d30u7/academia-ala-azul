# Academia Ala Azul

Academia web interactiva para familiarizarse con los conocimientos iniciales de la ruta a **Piloto Privado de Avión (PPA)** en Argentina.

Combina contenidos introductorios, preguntas, experiencia (XP), niveles, repaso espaciado, glosario, notas personales y seguimiento de un fondo de vuelo. Funciona completamente en el navegador y no necesita base de datos.

> **Alcance:** es una herramienta de preparación y familiarización. No sustituye un curso aprobado, la instrucción de vuelo, la normativa vigente ni el criterio de instructores, médicos examinadores o autoridades aeronáuticas.

## Características

- 10 unidades y 20 lecciones.
- Explicación progresiva de siglas y términos aeronáuticos.
- Preguntas con devolución inmediata.
- XP, niveles, rachas, objetivos y logros.
- Repetición espaciada y práctica de temas débiles.
- Glosario, favoritos y ayuda contextual.
- Notas por lección.
- Fondo de vuelo y proyección de ahorro.
- Tema claro y oscuro.
- Exportación e importación del progreso en JSON.
- Diseño adaptable a computadora, tablet y teléfono.

## Publicar en GitHub Pages

El repositorio incluye el flujo automático `.github/workflows/pages.yml`.

1. Creá un repositorio nuevo, por ejemplo `academia-ala-azul`.
2. Subí **todo el contenido de esta carpeta**, incluida `.github`.
3. Confirmá que la rama principal se llame `main`.
4. Entrá en **Settings → Pages**.
5. En **Build and deployment → Source**, elegí **GitHub Actions**.
6. Abrí **Actions** y verificá la ejecución `Publicar Academia Ala Azul en GitHub Pages`.
7. Al finalizar, GitHub mostrará la dirección pública.

Cada cambio enviado a `main` vuelve a publicar la academia.

## Uso local

Podés abrir `index.html` directamente. Para servirlo localmente:

```bash
python -m http.server 8000
```

Luego abrí `http://localhost:8000`.

## Migrar el progreso anterior

El progreso se guarda en `localStorage` bajo la clave `alaAzulStateV1`. Se conserva esa misma clave, pero el almacenamiento depende de la dirección desde la que se abre el sitio.

El progreso de `file://.../ala_azul.html` no aparecerá automáticamente en GitHub Pages. Para trasladarlo:

1. En la versión anterior, entrá en **Perfil y datos → Exportar datos**.
2. Guardá el archivo JSON.
3. Abrí la versión publicada.
4. Entrá en **Perfil y datos → Importar datos**.
5. Seleccioná el respaldo.

## Estructura

```text
academia-ala-azul/
├── index.html
├── site.webmanifest
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/app.js
│   └── icons/favicon.svg
├── docs/
│   ├── GUIA_DE_CONTENIDO.md
│   └── PRIVACIDAD_Y_DATOS.md
└── .github/workflows/pages.yml
```

## Editar contenidos

La información principal está en `assets/js/app.js`:

- `units`: unidades.
- `lessons`: lecciones, conceptos y preguntas.
- `glossary`: diccionario.
- `terminology`: ayuda contextual de abreviaturas.

La guía está en [`docs/GUIA_DE_CONTENIDO.md`](docs/GUIA_DE_CONTENIDO.md).

## Tecnologías

HTML, CSS y JavaScript nativos. No usa frameworks, paquetes externos ni compilación. Esta humilde ausencia de `node_modules` evita instalar media internet para enseñar qué significa PPA.

## Versión y licencia

Versión del repositorio: **1.2.0**.

No se incluyó una licencia de código abierto. Si el repositorio se hace público, el código queda visible, pero no se conceden automáticamente permisos de reutilización. Conviene definir una licencia antes de aceptar contribuciones o permitir derivados.
