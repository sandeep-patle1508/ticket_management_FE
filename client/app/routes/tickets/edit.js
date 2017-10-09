import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  afterModel(model) {
    model.rollbackAttributes();
  },
  model(params){
    return this.store.find('ticket', params.id);
  }
});
