# transpiladores
Desafío de coderhouse: Transpiladores

## babel
Para transpilar el "server.es6.js" a server (js5) lo que hice fue agregar en el package.json esta linea de código en "scripts".

"ServerES6toJS5": "./node_modules/.bin/babel ./server.es6.js -o ./server.js -w", 

Luego ejecutar

```bash
npm run ServerES6toJS5 
```

## Typescript
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


