describe("filter", function () {
  it(" returns a string after removing all the banned words", function () {
    assert.equal("This house is not nice".filter("not"), "This house is nice");
  });
});

describe("bubbleSort", function () {
  it("  works by repeatedly stepping through array of number to be sorted ", function () {
    assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), "-2,0,1,3,4,6"); //needs improvement
  });
});

describe("teach", function () {
  it(" receives a string called subject, and returns:[teacher's name] is now teaching [subject]", function () {
    assert.equal(str, "Stan Smith is now teaching WAP");
  });
});
