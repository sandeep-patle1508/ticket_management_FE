import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(){
    return this.store.findAll('ticket');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
