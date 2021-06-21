# transpiladores
Desafío de coderhouse: Transpiladores

## babel
Para usar babel, instalar:

```bash
npm i babel-cli
npm i babel-preset-env
```

Para transpilar el "server.es6.js" a server (js5) lo que hice fue agregar en el package.json esta linea de código:

```bash
"ServerES6toJS5": "./node_modules/.bin/babel ./server.es6.js -o ./server.js -w",   
```

Luego ejecutar

```bash
npm run ServerES6toJS5 
```

## Typescript
Para usar typescript, instalar 

```bash
npm i typescript
```
Para iniciar typescript

```bash
tsc --init
```
Luego al obtener tsconfig.json lo que hice fue descomentar "outDir": "./" y agregar "dist" para que todo el projecto se transpile a js5 para luego distribuirlo a producción. 

Para construir el código a js

```bash
npm run build
```

luego para correr el proyecto

```bash
npm run start
```

## IMPORTANTE

Instalar types para express
```bash
npm install -D @types/express@4.16.1
```

