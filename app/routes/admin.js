import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    saveNewBlog5(params){
      var newRecord = this.store.createRecord("blog", params);
      newRecord.save();
    },
    sendDelete(blog){
      console.log("made it to admin.js");
      blog.destroyRecord();
    }
  },
  model() {
    return this.store.findAll("blog");
    }
});
