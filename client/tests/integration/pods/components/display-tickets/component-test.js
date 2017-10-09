import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('display-tickets', 'Integration | Component | display tickets', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let ticketData = [
    Ember.Object.create({'title': 'centralized', 'discription': 'trending algorithm', 'status': 'open', 'reporter': 'Grant'}),
    Ember.Object.create({'title': 'Decentralized', 'discription': 'Advanced upward-trending algorithm', 'status': 'open', 'reporter': 'Benton Grant'}),
  ];

  this.set('model', ticketData);
  this.render(hbs`{{display-tickets tickets=model}}`);

  let tables = this.$('table');
  let spans = this.$('span');

  assert.equal(spans.hasClass('label'), true);
  assert.equal(tables.hasClass('table-bordered'), true);
});
