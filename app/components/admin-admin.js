import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveNewBlog3(params){
      this.sendAction("saveNewBlog4", params);
    }
  }
});
