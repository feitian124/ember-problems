import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    add: function() {
      this.get('chores').addObject('my added ' + Math.random());
    }
  }
});
