# Project VUEJSTSTEMPLATE

## Environment

```
node >= 9
npm >= 5.6.0
yarn >= 1.5.1
vue >= 3
```

## Use Docker

```
docker run -it -d -v $(pwd):/workspace -v node_modules:/workspace/node_modules -p 8080:8080 --name vuejs-ts-web kkarczmarczyk/node-yarn bash
```

## Code Style

```
https://github.com/palantir/tslint
```

## Project setup
```
yarn global add @vue/cli

yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
