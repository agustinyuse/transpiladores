import express from "express";
import {Products} from "./api/products";

const products = new Products();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/productos/listar", (req, res) => {
  res.json(products.get());
});

app.get("/api/productos/listar/:id", (req, res) => {
  res.json(products.getById(req.params.id));
});

app.post("/api/productos/guardar", (req, res) => {
  const object = req.body;
  //TODO: Puede que quiera que sea de tipo number
  //Pero con esto me ahorro de validar si es numero despues :p

  object.id = String(products.get().length + 1);
  products.save(object);

  res.json(object);
});

app.put("/api/productos/actualizar/:id", (req, res) => {
  const product = req.body;
  product.id = req.params.id;

  const index = products.get().findIndex((p) => p.id === req.params.id);

  products.update(index, product);

  res.json(product);
});

app.delete("/api/productos/borrar/:id", (req, res) => {
  const index = products.get().findIndex((p) => p.id === req.params.id);

  const product = products.delete(index);

  res.json(product);
});

const puerto = 3000;

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on("error", (error) => {
  console.log("error en el servidor:", error);
});
