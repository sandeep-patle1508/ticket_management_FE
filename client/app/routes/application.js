import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),
  session: service('session'),

  beforeModel() {
    if (this.get('session').get('isAuthenticated') === false) {
      this.transitionTo('login');
    }
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._loadCurrentUser().then(()=>{
      var role = this.get('sessionAccount').get('account.role');
      if (role === 'admin'){
        this.controllerFor("application").set("isAdmin", true);
      }
      this.transitionTo('/');
    }).catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  },

  actions: {
    logout(){
      let session = this.get('session');
      if (session.get('isAuthenticated')) {
        session.invalidate();
      }
    },
    sessionInvalidationSucceeded: function(){
     this.transitionTo('/');
   },
   toggleMenu() {
     Ember.$("#wrapper").toggleClass("toggled");
   }
 }

});
