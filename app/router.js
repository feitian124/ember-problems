import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function() { });
  this.resource('comments', function() { });
  this.route('hamster');
});

export default Router;
