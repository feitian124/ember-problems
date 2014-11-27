module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": fakePosts(10)
    });
  });
  app.use('/api/posts', postsRouter);
};

function fakePosts(n) {
  var i = 0, posts = [];

  while(i < n) {
    posts.push({id: i, text: 'post' + i});
    i++;
  }

  return posts;
}