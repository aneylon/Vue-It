function Add(one, two) {
  return one + two;
}

function Sub(one, two) {
  return one - two;
}

QUnit.module("Sub", function () {
  QUnit.test("Add Two numbers", function (assert) {
    assert.equal(Add(1, 2), 3);
  });
  QUnit.test("Subtract two numbers", function (assert) {
    assert.equal(Sub(3, 1), 2);
  });
});
