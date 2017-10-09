import Ember from 'ember';
import RequestValidations from 'client/mixins/validation';

export default Ember.Controller.extend(RequestValidations, {

  userRoles: Ember.A([{role:'agent', id:1}, {role:'customer', id:3}]),

  actions:{
    save() {
      this.get('model').save()
        .then(() => this.transitionToRoute('users'))
        .catch(alert);
    }
  }
});
