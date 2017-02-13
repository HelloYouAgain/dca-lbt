## Sistema de control y reporte de errores

Para ejecutarlo:

- npm install
- node server.js

Los reportes de error pueden tener **cuatro** estados:

- pendiente (abierto) 
- listado (abierto)
- resuelto (cerrado)
- no es un error (cerrado)

Los tipos de reporte pueden ser cuatro (sacados del ejemplo de Debian del pdf de la asignatura):

- Importante: "Un fallo que tiene un efecto importante en la usabilidad de un paquete, sin hacerle completamente inútil para todo el mundo."
- Normal: "El valor por omisión, aplicable a la mayoría de los fallos."
- Menor: "Un problema que no afecta a la utilidad del paquete, y presumiblemente es trivial de arreglar."
- Wishlist: "Para la petición de cualquier característica, y también para cualquier fallo que sea muy difícil de arreglar debido a consideraciones de diseño mayores."

La gravedad del reporte pueden ser tres (sacados del ejemplo de Debian del pdf de la asignatura):

- critical: Hace que software no relacionado entre sí en el sistema (o el sistema entero) falle, o cause serias pérdidas de datos, o introduzca un agujero de seguridad en el sistema donde se instale el paquete.
- grave: Hace que el paquete en cuestión no se pueda utilizar o no se pueda casi nunca, o cause pérdida de datos, o introduce un agujero de seguridad que permita el acceso a las cuentas de los usuarios que usen el paquete.
- serious: Es una violación severa de la política de Debian (en pocas palabras, viola una directiva debe (must) o requerida (required)) o, en opinión del responsable del paquete o del responsable de la publicación de una versión de debian, hace que el paquete no se pueda publicar.

> Realizado por María Alonso López para la asignatura Desarrollo Colaborativo de Aplicaciones de la Universidad de Alicante 2016/17.
