import { moduleFor, test } from 'ember-qunit';

moduleFor('service:flash', 'Unit | Service | Flash', {
  unit: true
});

test('should allow messages to be queued', function (assert) {
  let subject = this.subject();
});

moduleFor('service:non-singleton-service', 'Unit | Service | NonSingletonService', {
  unit: true
});

test('does something', function (assert) {
  let subject = this.subject({ name: 'James' });
});

moduleFor('model:foo', 'Unit | Model | Foo', {
  unit: true
});

test('has some thing', function (assert) {
  let subject = this.subject();
});

test('has another thing', function (assert) {
  let subject = this.subject({ size: 'big' });
});

moduleForModel('foo', 'Integration | Model | Foo', {
  integration: true
});

test('has some thing', function (assert) {
  let subject = this.subject();
});

moduleForModel('foo', 'Unit | Model | Foo', {
  needs: ['serializer:foo']
});

test('has some thing', function (assert) {
  let subject = this.subject();
});

moduleForComponent('foo-bar', 'Unit | Component | FooBar', {
  unit: true,
});

test('has some thing', function (assert) {
  let subject = this.subject();
});

test('has another thing', function (assert) {
  let subject = this.subject({ size: 'big' });
});