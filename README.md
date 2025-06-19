# 🌐 GraphQL - Dynamic Query API Example

This project demonstrates a basic GraphQL API using **Node.js**, **Express**, and **express-graphql**. It allows the client to send a query with a `nombre` parameter and receive a custom greeting message in response.

---

## 📁 Project GraphQL

## 🛠️ Prerequisites

- Node.js v14 or higher
- NPM
- A modern web browser (for GraphiQL UI)

---

## 🚀 Installation

1. Clone the repository or create a local folder and add the files.
2. Open a terminal in that folder and run:

```bash
npm init -y
npm install express express-graphql graphql

```

## ▶️ Run the Server
In the terminal:

```bash
node index.js

```
Expected output:

```bash
GraphQL server running at http://localhost:4000/graphql(example)
```

Enter the following query in the GraphiQL interface:
```bash
{
  saludar(nombre: "Sebastian")
}
```

Expected response:
```bash
{
  "data": {
    "saludar": "¡Hola, Sebastian!"
  }
}
```

