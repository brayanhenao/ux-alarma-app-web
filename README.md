# AlarmaApp - Interfaz Web

Este proyecto es la interfaz web de la aplicación AlarmaApp, desarrollada como parte del curso de
_*Mejoramiento de la Experiencia de Usuario*_ en la Universidad de los Andes.

## Tabla de Contenido
 - [Integrantes](#integrantes)
 - [Diseño en Figma](#diseño-en-figma)
 - [Acerca del Desarrollo de la Interfaz](#acerca-del-desarrollo-de-la-interfaz)
 - [Instalación](#instalación)
 - [Ejecución](#ejecución)
 - [Construcción](#construcción)
 - [Consideraciones](#consideraciones)

## Integrantes

- [Brayan Henao](https://www.github.com/brayanhenao)
- [Erik Loaiza](https://www.github.com/erikloaiza)

## Diseño en Figma

Hemos utilizado [Figma](https://www.figma.com) para el diseño de la interfaz web. A continuación, se detallan los
enlaces al archivo de Figma y al prototipo.

- [Figma detallado](https://www.figma.com/file/nmNENfwkDFjtW5zHhmEXTW/UX---Alarma-App-(Web)-(Full)?type=design&node-id=54495-24451&mode=design&t=6PSuAXkK9T1TPLTp-0)
- [Prototipo](https://www.figma.com/proto/nmNENfwkDFjtW5zHhmEXTW/UX---Alarma-App-(Web)-(Full)?type=design&node-id=54495-24451&t=6PSuAXkK9T1TPLTp-0&scaling=contain&page-id=54495%3A24451&starting-point-node-id=54529%3A29041)

## Acerca del Desarrollo de la Interfaz

Para el desarrollo de la interfaz, hemos utilizado las siguientes tecnologías:

- [React](https://reactjs.org/): una librería de JavaScript para el desarrollo de interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/): un lenguaje de programación tipado que se compila a JavaScript.
- [Vite](https://vitejs.dev/): una herramienta para el desarrollo de aplicaciones web con React.
- [PNPM](https://pnpm.io/): un gestor de paquetes para JavaScript, compatible con NPM (mucho más rápido).
- [React Router](https://reactrouter.com/): una librería de React para el manejo de rutas.
- [Material UI](https://mui.com/): una librería de componentes de React basados en Material Design.
- [Material Icons](https://mui.com/material-ui/material-icons/): una librería de iconos de Material Design.

## Instalación

Para instalar el proyecto, debes clonar el repositorio y luego instalar las dependencias con PNPM:

```shell
git clone git@github.com:brayanhenao/ux-alarma-app-web.git
cd ux-alarma-app-web
pnpm install
```

## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando:

```shell
pnpm run dev
```

## Construcción

Si deseas construir el proyecto, ejecuta el siguiente comando:

```shell
pnpm run build
```

El proyecto se construirá en la carpeta `dist`.

## Consideraciones

Dado que es un proyecto de prototipado, no hemos implementado ninguna lógica de negocio. Para acceder al dashboard,
utiliza el correo `admin@admin.com` y la contraseña `admin`. También puedes acceder mediante la URL `/dashboard`.