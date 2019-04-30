const axios = require('axios');

const serverURL = `http://ec2-54-215-246-64.us-west-1.compute.amazonaws.com:3001`

module.exports.reviewsPost = (req, res) => {
  const { restaurant_id } = req.params;
  axios.post(`${serverURL}/api/restaurants/${restaurant_id}/reviews`, req.body)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsGet = (req, res) => {
  const { restaurant_id } = req.params;
  axios.get(`${serverURL}/api/restaurants/${restaurant_id}/reviews`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsPatch = (req, res) => {
  const { restaurant_id } = req.params;
  const { review_id } = req.params;
  axios.patch(`${serverURL}/api/restaurants/${restaurant_id}/reviews/${review_id}`, req.body)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.reviewsDelete = (req, res) => {
  const { restaurant_id } = req.params;
  const { review_id } = req.params;
  axios.delete(`${serverURL}/api/restaurants/${restaurant_id}/reviews/${review_id}`)
    .then(response => res.send(response.data))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
};