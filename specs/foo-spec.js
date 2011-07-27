describe("foo", function() {
  
  beforeEach(function() {
    target = UIATarget.localTarget();
  });
  
  it("should capture screen shot app under test", function() {
    target.captureScreenWithName("foo");
  });
  
  it("device under test should be running iPhone OS", function() {
    expect(target.systemName()).toEqual("iPhone OS");
  });
  
});