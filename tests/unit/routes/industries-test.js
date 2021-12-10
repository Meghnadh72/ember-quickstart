import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | industries', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:industries');
    assert.ok(route);
  });
});
