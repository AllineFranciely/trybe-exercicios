const express = require('express');
const bodyParser = require('body-parser');
const authMiddlerware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function(req, res) {
  res.send('open!')
});

app.get('/fechado', authMiddleware, function (req, res) {
	res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.use(authMiddlerware);

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created sucessfully!' });
});

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid data!' });
  }
  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (price === undefined || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invelid data!' });
  }
  next();
};

//mportante entender que, de acordo com as regras definidas pelo exercício, price: 0 deve ser um valor válido. Por isso, não podemos utilizar !price na validação, já que nesse caso, o 0 seria considerado como um valor falsy e isso geraria um erro na validação, fazendo com que a função retorne uma mensagem de erro mesmo recebendo um valor válido. 

app.post('/recipes', validateName, validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created sucesfully' });
});

app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIdex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end()
})

// app.delete('/recipes',
// function (req, res) {
//   const { id } = req.body;
//   recipes.map((id) => recipes.id !== id)
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});