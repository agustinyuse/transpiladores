"use strict";

var express = require("express");
var products = require("./api/products");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/productos/listar", function (req, res) {
  res.json(products.get());
});

app.get("/api/productos/listar/:id", function (req, res) {
  res.json(products.getById(req.params.id));
});

app.post("/api/productos/guardar", function (req, res) {
  var object = req.body;
  //TODO: Puede que quiera que sea de tipo number
  //Pero con esto me ahorro de validar si es numero despues :p

  object.id = String(products.get().length + 1);
  products.save(object);

  res.json(object);
});

app.put("/api/productos/actualizar/:id", function (req, res) {
  var product = req.body;
  product.id = req.params.id;

  var index = products.get().findIndex(function (p) {
    return p.id === req.params.id;
  });

  products.update(index, product);

  res.json(product);
});

app.delete("/api/productos/borrar/:id", function (req, res) {
  var index = products.get().findIndex(function (p) {
    return p.id === req.params.id;
  });

  var product = products.delete(index);

  res.json(product);
});

var puerto = 3000;

var server = app.listen(puerto, function () {
  console.log("servidor escuchando en http://localhost:" + puerto);
});

server.on("error", function (error) {
  console.log("error en el servidor:", error);
});
