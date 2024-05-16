import createError from 'http-errors';
import express, { json, urlencoded} from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import ClientModel from './models/client.js';
import ProductModel from './models/product.js';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import clientsRouter from './routes/clients.js';
import appRouter from './routes/app.js';
import collectionsRouter from './routes/collections.js';
import productsRouter from './routes/products.js';

const app = express();

import database from './config/db_connect.js';

main().catch((error) => console.log(error));
async function main() {
  console.log('Starting database connection.');
  await database.authenticate();

  ClientModel.sync();
  ProductModel.sync();

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
  res.render('error');
});

export default app;
