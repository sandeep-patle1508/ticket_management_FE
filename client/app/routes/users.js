import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  sessionAccount: service('session-account'),

  beforeModel() {
    if (this.get('sessionAccount').get('account.role') !== 'admin') {
      this.transitionTo('index');
    }
  },

  actions: {
    delete: function(user) {
      var _this = this;
      if (confirm("Want to delete this user?")) {
        user.destroyRecord().then(function() {
          _this.transitionTo('users.index');
        });
      }
    }
  }
});
