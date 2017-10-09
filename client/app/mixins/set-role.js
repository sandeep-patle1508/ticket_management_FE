import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Mixin.create({

  sessionAccount: service('session-account'),
  session: service('session'),

  isAdmin: false,
  isAgent: false,
  isCustomer: false,

  accessLevel:  Ember.computed(function(){
    return this.get('sessionAccount').get('account').get('role');
  }),

  pageHeader: Ember.computed('accessLevel', function(){
    var role = this.get('accessLevel');
    if (role ==='admin'){
      return "All Tickets";
    }else if (role === 'agent') {
      return "Assigned Tickets";
    }else{
      return "Previous Tickets & Status";
    }
  }),

  setRole(){
    var role = this.get('accessLevel');
    if (role === 'admin'){
      this.set('isAdmin', true);
    }else if (role === 'agent'){
      this.set('isAgent', true);
    }else{
      this.set('isCustomer', true);
    }
  },



});
