# Imagen base segura y ligera
FROM node:lts-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Exponer puerto de GraphQL (4000 por defecto)
EXPOSE 4000

# Ejecutar la aplicación
CMD ["node", "index.js"]
