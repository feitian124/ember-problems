module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  postsRouter.get('/', function(req, res) {
    res.send({"posts":[]});
  });
  app.use('/api/posts', postsRouter);
};
