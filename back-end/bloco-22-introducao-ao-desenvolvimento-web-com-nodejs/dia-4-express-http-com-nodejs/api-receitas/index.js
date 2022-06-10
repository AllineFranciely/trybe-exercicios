const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const recipesSort = recipes.sort(function(a,b) {
  let x = a.name.toUpperCase();
  let y = b.name.toUpperCase();

  return x < y ? -1 : x > y ? 1 : 0;
});

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const drinksSort = drinks.sort(function(a,b) {
  let x = a.name.toUpperCase();
  let y = b.name.toUpperCase();

  return x < y ? -1 : x > y ? 1 : 0;
});

app.get('/recipes', function (req, res) {
  res.json(recipesSort);
});

app.get('/drinks', function (req, res) {
  res.json(drinksSort);
});

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipesSort.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
	res.status(200).json(filteredRecipes);
});

app.get('/drinks/:id', function (req, res) {
  const { i } = req.params;
  const drink = drinksSort.find((d) => d.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink nou found!"'});

  res.status(200).json(drink);
}); 

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipesSort.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipesSort.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinksSort.push({ id, name, price });
  res.status(201).json({ message: 'Drink create suceddfully'});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});


