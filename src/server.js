const express = require("express");
const app = express();

const funcionario = {
    nome: "Edson",
    nomeCompleto: "Edson da Silva Gomes",
    cargo: "Técnico em Informática",
    matricula: "595"
}

app.get("/", (request, response) => {
    return response.send(funcionario);
})

if (app.listen(3000)){
    console.log("Servidor ativo na porta 3000 ...");
}