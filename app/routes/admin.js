import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    saveNewBlog5(params){
      var newRecord = this.store.createRecord("blog", params);
      newRecord.save();
    }
  }
});
