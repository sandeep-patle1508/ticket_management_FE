import Ember from 'ember';
import setRole from 'client/mixins/set-role';


export default Ember.Controller.extend(setRole,{
  createUser: 'User',

  init: function() {
    this._super();
    this.setRole();
  }
});
