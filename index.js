const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// 1. Definir el esquema (schema)
const schema = buildSchema(`
  type Query {
    saludar(nombre: String!): String
  }
`);

// 2. Definir los resolvers
const root = {
  saludar: ({ nombre }) => `¡Hola, ${nombre}!`
};

// 3. Crear la app Express con middleware GraphQL
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true  // Interfaz visual para hacer consultas desde el navegador
}));

// 4. Iniciar el servidor
app.listen(4000, () => {
  console.log('Servidor GraphQL corriendo en http://localhost:4000/graphql');
});
