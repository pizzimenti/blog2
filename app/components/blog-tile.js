import Ember from 'ember';

export default Ember.Component.extend({
  updateFlag: false,
  actions:{
    sendDelete(blog){
      this.sendAction("sendDelete", blog);
    },
    setUpdateFlag() {
    this.set("updateFlag", !this.updateFlag);
    console.log("update flag", this.updateFlag);
    }
  }
});
