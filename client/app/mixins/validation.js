import Ember from 'ember';
import ticketsValidation from 'ember-validations';

export default Ember.Mixin.create(ticketsValidation, {
  validations : {
    'model.title': {
      presence: true
    },
    'model.description': {
      presence: true
    }
  }
});
