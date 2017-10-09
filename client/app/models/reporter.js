// import DS from 'ember-data';
// import Ember from 'ember';
//
// export default DS.Model.extend({
//   firstName: DS.attr('string'),
//   lastName: DS.attr('string'),
//   email: DS.attr('string'),
//   phone: DS.attr('string'),
//   role: DS.attr('string'),
//   fullName: Ember.computed('firstName', 'lastName', function() {
//     return `${this.get('firstName')} ${this.get('lastName')}`;
//   }),
  // reportedTickets: hasMany('ticket', { async: true })
// });

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  firstName: attr(),
  lastName: attr(),
  email: attr(),
  phone: attr(),
  role: attr(),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
});
