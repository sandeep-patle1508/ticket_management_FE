import Ember from 'ember';

export default Ember.Controller.extend({

	userRoles: Ember.A([{role:'agent', id:1}, {role:'customer', id:3}]),

	actions: {
    save() {
      this.get('model').save()
        .then(() => this.transitionToRoute('users'))
        .catch(alert);
    }
  }

});
