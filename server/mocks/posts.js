module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      posts: fakePosts(count),
      comments: fakeComments(count)
    });
  });
  app.use('/api/posts', postsRouter);
};

// n is the number of posts
function fakePosts(n) {
  var i = 0, posts = [];

  while(i < n) {
    posts.push({ id: i, text: 'post' + i, comments: [2*i, 2*i+1] });
    i++;
  }

  return posts;
}

// n is the number of comments
function fakeComments(n) {
  var i = 0, comments = [];

  while(i < n) {
    comments.push({ id: 2*i, text: 'comments ' + (2*i) });
    comments.push({ id: 2*i+1, text: 'comments ' + (2*i+1) });
    i++;
  }

  return comments;
}

var count = 70;