# md-links-irp

## Preámbulo

Markdown es un lenguaje de marcado ligero muy popular entre muchos developers, pues es donde generalmente escriben su información relevante del proyecto que estan desarrollando (justo como este que estas leyendo). 

Entre los muchos elementos que contiene los archivos MD son los **links** que sirven para ampliar la data dada y poner a disposición de los lectores más herramientas. Pero, tienen un detalle, algunos de estos te redirigen a páginas que ya no existen o simplemente ya no te redirigen a ningún lado. Y es ahí donde **md-links-irp** entra a solucionar este problema. 

### Objetivo del proyecto

Crear una librería desde cero que haga uso de otras librerías para retornar los links detectados en un archivo MD y validar que estos sean funcionales o no. Así como entregar estadísticas respecto a estos mismos links.

Crear un plan para lograr una librería funcional que pueda ser instalada desde npm, utilizada desde la línea de comandos o como una API en un archivo JavaScript requiriendola como módulo.

## ¿Qué es md-links-irp?

Es una librería que te permite idenficar los links de un archivo Markdown, verlos enlistados en tu consola y validar cuantos y cuales de ellos si son links que te dirigan a una página web.

## ¿Cómo lo instalo?

Lo único que debes de hacer es abrir tu terminal y posicionarte en la carpeta donde requieras utilizar la librería y teclear o pegar el siguiente comando (esto asume que tu ya tienes instalado [nodejs](https://nodejs.org/en/) y por lo tanto npm también, que se instala junto con node): 

`npm install md-links-irp`
o si lo necesitas de manera global, lo puedes hacer de esta manera:
`npm install -g md-links-irp`

Y listo! 

## ¿Cómo se usa?
md-links-irp puede ser utilizado desde un archivo js o desde tu terminal.
- ### Uso desde la terminal
    Una vez instalado puedes teclear en tu terminal `mdlinksirp <ruta del archivo que quieres analizar>` y enter.
    
    Por ejemplo `mdlinksirp README.md` <-- este ruta o **path** es del archivo que lees actualmente.
    Lo que te retornará en consola un listado de los links dentro de ese archivo.

    Si quieres saber cuales de ellos si "sirven" puedes agregar la bandera --validate
    `mdlinksirp README.md -validate`. Que te retornará un listado de los mismos links y un **ok** a lado de los links que si te redirigen a una página web y un **false** cuando no "sirva".

    Si quieres saber cuantos links son, agregas la bandera -stats ejemplo: `mdlinksirp README.md -stats`. Te retornará un conteo de los links que si sirvan y un conteo de los que no.

- ### Uso como API
    Una vez instalada la librería solo necesitas requerirla 
    en el archivo por ejemplo: 

    ```js
    const mdLinks: require(md-links-irp)

    mdLinks('./README.md');
    ```

    Y abajo en tu terminal/consola vas encontrar el resultado de tu búsqueda.

    Ahora si nuevamente quieres validar los links que si te redirigen agregarías un segundo parámetro.
    ```js
    const mdLinks: require(md-links-irp)

    mdLinks('./README.md', {validate: true});
    ```

## Autores

Isela Reyes Perdomo

## Plan de acción

### Preparar github y proyecto local.

- [x] Forkear y clonar repositorio de [Laboratoria](https://github.com/Laboratoria/MEX008-FE-md-link).
- [x] Instalar dependencias (jest, eslint).
- [x] Leer librerías sugeridas para implementar la adecuada a mi proyecto.

### Preparar NPM 

- [x] Crear cuenta en NPM.
- [x] Crear archivo package.json.
- [x] Vincular proyecto con NPM.
- [x] Versionar archivo package.json.
- [x] Subir archivos a NPM.

### Elegir librería
- [x] Markdown it.

### Crear módulos
- [x] Un archivo index.js que será el encargado de llamar a las funciones necesarias para realizar las actividades que retornen el resultado esperado.
- [x] Un archivo stats.js que se encargará de realizar las estadísticas de los links.
- [x] Un archivo validate.js que se encargará de revisar que los links si te redirijan a algún lugar.
- [x] Un archivo md.js que se dedique solo a saber si un archivo es markdown o no.

### Crear test

#### index.js
- [x] Test que cheque que si sea una función.
- [ ] Test que ejecute la función pero que no reciba parámetros (¿qué pasa?)
- [ ] Test que ejecute la función con un solo parámetro.
- [ ] Test que ejecute la función con dos parametros (path y validate).
- [ ] Test que ejecute la función con dos parametros (path y stats).

#### file.js
- [x] Test que cheque que es una función.
- [] Test que revise que lo que retorna es una string.
#### md.js
- [x] Test que cheque que si sea una función.
- [x] Test que ejecute la función recibiendo archivo md.
- [x] Test que ejecute la función recibiendo archivo txt.


## Otros recursos

Como veras, md-links-irp utiliza una librería llamada Marckdown it, para detectar los links del archivo MD.
Por lo que si te gustaría conocer más sobre sus metódos o su [documentación](https://markdown-it.github.io/markdown-it/) para utilizarlo en tus proyectos puedes visitar el repositorio [aquí](https://github.com/markdown-it/markdown-it).

