# Usar la imagen oficial de Node.js como imagen base
FROM node:14 AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencias al directorio de trabajo
COPY package*.json ./

# Instalar todas las dependencias, incluyendo las de desarrollo
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Ejecutar el script de build que compila el TypeScript a JavaScript
RUN npm run build

# Iniciar una nueva fase para mantener la imagen lo más limpia y pequeña posible
FROM node:14

WORKDIR /usr/src/app

# Copiar solo las dependencias necesarias para la ejecución
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --only=production

# Copiar los archivos compilados de la fase anterior
COPY --from=builder /usr/src/app/dist ./dist

# Exponer el puerto que utiliza tu aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/index.js"]
