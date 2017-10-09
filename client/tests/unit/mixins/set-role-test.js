import Ember from 'ember';
import SetRoleMixin from 'client/mixins/set-role';
import { module, test } from 'qunit';

module('Unit | Mixin | set role');

// Replace this with your real tests.
test('it works', function(assert) {
  let SetRoleObject = Ember.Object.extend(SetRoleMixin);
  let subject = SetRoleObject.create();
  assert.ok(subject);
});
