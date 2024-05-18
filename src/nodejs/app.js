import createError from 'http-errors';
import express, { json, urlencoded} from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

import database from './config/db_connect.js';

// import ClientModel from './models/client.model.js';
// import ProductModel from './models/product.model.js';
// import IngredientModel from './models/ingredient.model.js';


main().catch((error) => console.log(error));
async function main() {
  console.log('Starting database connection.');
  await database.authenticate();
  
  // ClientModel.sync();
  // ProductModel.sync();
  // IngredientModel.sync();
  
  console.log('Connection has been stablished successfully.');
}

// view engine setup
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

import indexRouter from './routes/index.route.js';
import usersRouter from './routes/users.route.js';
import clientsRouter from './routes/clients.route.js';
import appRouter from './routes/app.route.js';
import collectionsRouter from './routes/collections.route.js';
import productsRouter from './routes/products.route.js';

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/app', appRouter);
app.use('/collections', collectionsRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: `Erro ${err.status}`});
});

export default app;