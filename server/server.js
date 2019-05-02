require('newrelic');
const express = require('express');
const morgan = require('morgan');
const controllers = require('./controllers');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/restaurants/:restaurant_id', express.static('public'));
app.use('/', express.static('client/dist'));

app.post('/api/restaurants/:restaurant_id/reviews', controllers.reviewsPost);
app.get('/api/restaurants/:restaurant_id/reviews', controllers.reviewsGet);
app.patch('/api/restaurants/:restaurant_id/reviews/:review_id', controllers.reviewsPatch);
app.delete('/api/restaurants/:restaurant_id/reviews/:review_id', controllers.reviewsDelete);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});