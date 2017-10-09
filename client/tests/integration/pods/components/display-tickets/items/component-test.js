import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('display-tickets/items', 'Integration | Component | display tickets/items', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let ticketData = [
    Ember.Object.create({'title': 'centralized', 'discription': 'trending algorithm', 'status': 'open', 'reporter': 'Grant'}),
    Ember.Object.create({'title': 'Decentralized', 'discription': 'Advanced upward-trending algorithm', 'status': 'close', 'reporter': 'Benton Grant'}),
  ];

  this.set('ticket', ticketData);
  this.render(hbs`{{display-tickets/items ticket=ticket}}`);

  let spans = this.$('span');

  assert.equal(spans.hasClass('label'), true);

});
