const axios = require('axios');

module.exports.reviewsPost = (req, res) => {
  const { restaurant_id } = req.params;
  axios.post(`http://localhost:3001/api/restaurants/${restaurant_id}/reviews`, req.body)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsGet = (req, res) => {
  const { restaurant_id } = req.params;
  axios.get(`http://localhost:3001/api/restaurants/${restaurant_id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsPatch = (req, res) => {
  const { restaurant_id } = req.params;
  const { review_id } = req.params;
  axios.patch(`http://localhost:3001/api/restaurants/${restaurant_id}/reviews/${review_id}`, req.body)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsDelete = (req, res) => {
  const { restaurant_id } = req.params;
  const { review_id } = req.params;
  axios.delete(`http://localhost:3001/api/restaurants/${restaurant_id}/reviews/${review_id}`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};