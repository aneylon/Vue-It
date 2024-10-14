console.log("test it out");

function Add(one, two) {
  return one + two;
}

function Sub(one, two) {
  return one - two;
}

QUnit.module("Sub", function () {
  QUnit.test("Two numbers", function (assert) {
    assert.equal(Sub(3, 1), 2);
  });
});
