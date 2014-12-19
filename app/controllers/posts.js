import Ember from 'ember';

export default Ember.ArrayController.extend({
  myposts: Ember.computed.map('model', function(item, index){
     console.log("item:", item);
     console.log('map index:', index);
     return item;
  })
});
