const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// Remove o 'list-products' pois req do tipo GET sem parametro(id por exemplo) já indica retorno de uma coleção de recursos;
// router.get('/list-products', async (req, res) => {

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  // O status 200 indica que a requisição foi concluída com sucesso e pafroniza para json.
  // res.send(products);
  res.status(200).json(products);
});

// Remove o 'get-by-id' pois req tipo GEt com parametro (ex: id) já indica retorno de um recurso.
// router.get('/get-by-id/:id', async (req, res) => {
router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  // Caso ñ exista o produto, usa 404 para indicar ñ encontrado e padronizar para json.
  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }
  // Usa status 200 para req concluída com sucesso e padronizar retorno para json.
  // res.send(product);
  res.status(200).json(product);
});

// Remove 'add-prodcut' pois req tipo POST já indica criação de novo recurso.
// router.post('/add-product', async (req, res) => {
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  // Caso nn seja informado um dos dados na req, usa status 400 p/ indicar erro na req e padronizar para json.
  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);

  // usa status 201 para indicar produto criado, req concluida com sucesso e padronizar retorno para json;
  // res.send(newProduct);
  res.status(201).json(newProduct);
});

// Altera o verbo HTTP para DELETE e remove 'delete-product' pois req tipo DELETE indica que deletará recurso.
//router.post('/delete-product/:id', async (req, res) => {
router.delete('/:id', async (req, res) => {
  const product = await ProductModel.exclude(req.params.id);

  // Caso produto n exista, status 404 indica recurso n encontrado e padroniza retorno para json.
  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.exclude(req.params.id);
  // Status 204 indica req concluída c/ sucesso e o retorno terá conteúdo e padroniza o retorno para json.
  // res.send(products);
  res.status(204).json();
});

// Altera o verbo HTTP para PUT e remove 'update-product', uma vez que PUT já indica será p/ atualizar recurso.
// router.post('/update-product/:id', async (req, res) => {

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  // Caso nn seja informado dados na req usa o status 400 p/ indicar req incorreta e padronizar retorno para json.
  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  // Caso n exista o produto no banco, usa status 404 p/ indicar recurso n encontrado e padroniza retorno para json.
  const product = await ProductModel.getById(req.params.id);
  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  // Usa status 200 p/ indicar req concluída c/ sucesso e padronizar retorno para json.
  await ProductModel.update(req.params.id, name, brand);
  
  // res.send(products);
  res.status(200).json({ name, brand });
});

module.exports = router;