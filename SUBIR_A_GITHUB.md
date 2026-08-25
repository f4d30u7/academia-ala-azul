# Subida rápida a GitHub

## Opción recomendada: GitHub Desktop

1. Descomprimí el ZIP.
2. Abrí GitHub Desktop.
3. Elegí **File → Add local repository** y seleccioná `academia-ala-azul`.
4. Si todavía no es un repositorio, GitHub Desktop ofrecerá crearlo.
5. Publicalo con el nombre `academia-ala-azul`.
6. En GitHub, abrí **Settings → Pages** y elegí **GitHub Actions**.

## Opción desde el navegador

1. Creá un repositorio vacío.
2. Elegí **uploading an existing file**.
3. Arrastrá todo el contenido descomprimido, incluida `.github`.
4. Confirmá el commit sobre `main`.
5. En **Settings → Pages**, elegí **GitHub Actions**.

Si el navegador no permite arrastrar `.github`, creá manualmente `.github/workflows/pages.yml` y copiá su contenido. Una carpeta que empieza con punto exige, por tradición informática, más ceremonia que varios componentes del avión.

## Verificación

En **Actions** debe aparecer `Publicar Academia Ala Azul en GitHub Pages`. El enlace del sitio quedará visible al finalizar correctamente.
