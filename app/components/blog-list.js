import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    sendDelete(blog){
      console.log("made it to blog-list.js")

    this.sendAction("sendDelete", blog);
    }
  }
});
