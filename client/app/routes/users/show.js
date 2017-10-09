import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params){
    return this.store.find('user', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
