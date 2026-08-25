# Privacidad y almacenamiento

## Datos guardados

Academia Ala Azul almacena localmente el alias, objetivo, XP, nivel, racha, lecciones completadas, respuestas, calendario de repaso, notas, configuración visual y datos del fondo de vuelo.

## Ubicación

Los datos se guardan mediante `localStorage` bajo la clave `alaAzulStateV1`.

Esta versión:

- no posee servidor propio;
- no crea cuentas;
- no transmite el progreso;
- no incorpora analítica ni publicidad;
- no sincroniza automáticamente entre dispositivos.

## Exportación y borrado

**Exportar datos** crea un JSON que puede contener notas e importes ingresados. **Borrar todo el progreso** elimina los datos del navegador actual.

Cada dominio, protocolo y navegador posee almacenamiento independiente. Para mover el progreso entre una versión local, GitHub Pages, otro dominio o dispositivo, debe usarse la exportación e importación JSON.
