import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    sendDelete(blog){
      this.sendAction("sendDelete", blog);
    }
  }
});
