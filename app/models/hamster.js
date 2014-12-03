import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  chores: ['clean', 'write more unit tests'],

  excitingChores: Ember.computed.map('chores', function(chore, index) {
    return chore.toUpperCase() + '!';
  })
});
