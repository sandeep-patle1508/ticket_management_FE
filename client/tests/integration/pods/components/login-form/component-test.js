import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{login-form}}`);

  let buttons = this.$('button');
  let labels = this.$('label');

  assert.equal(buttons.text().trim(), 'Login');
  assert.equal(labels.text().trim(), 'EmailPassword');
});
