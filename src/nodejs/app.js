import createError from 'http-errors';
import express, { json, urlencoded} from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import session_store from 'connect-session-sequelize';
import logger from 'morgan';

const app = express();

import database from './config/db_connect.js';

main().catch((error) => console.log(error));
async function main() {
  console.log('Starting database connection.');
  await database.authenticate();

  console.log('Connection has been stablished successfully.');
}

// view engine setup
app.set('views', './views');
app.set('view engine', 'hbs');
app.set('view options', {layout: 'layouts/main'});

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

const sessionStore = new (session_store(session.Store))({
  db: database,
  tableName: 'session',
})

app.use(session({
    secret: process.env.SS_SECRETS,
    cookie: {
      httpOnly:true,
      maxAge: 604800000
    },
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    
  }
))


import indexRouter from './routes/index.route.js';
import usersRouter from './routes/users.route.js';
import clientsRouter from './routes/clients.route.js';
import appRouter from './routes/app.route.js';
import collectionsRouter from './routes/collections.route.js';
import productsRouter from './routes/products.route.js';
import cartRouter from './routes/cart.route.js'

import adminRouter from './routes/admin/dashboard.route.js'
import statisticsRouter from './routes/admin/statistics.route.js';

import mapRouter from './routes/admin/map.route.js'

import pingRouter from './routes/ping.route.js'

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/app', appRouter);
app.use('/collections', collectionsRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.use('/admin', adminRouter);
app.use('/data/statistics', statisticsRouter);

app.use('/admin/map', mapRouter);

app.use('/ping', pingRouter);


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