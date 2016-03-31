import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveNewBlog3(params){
      this.sendAction("saveNewBlog4", params);
    },
    sendDelete(blog) {
      console.log("made it to admin-admin.js");
      this.sendAction("sendDelete", blog);
    }
  }
});
