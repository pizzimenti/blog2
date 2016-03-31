import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveNewBlog(){
      var params = {
        title: this.get("title")
      };
      this.sendAction("saveNewBlog2", params);
    }
  }
});
