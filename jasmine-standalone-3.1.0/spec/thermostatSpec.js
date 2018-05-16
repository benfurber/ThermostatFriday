describe("Thermostat", function(){
  var thermostat
  const startingTemp = 20

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20", function(){
    expect(thermostat.temperature).toEqual(startingTemp);
  });

  it("should start with power saving mode on", function(){
    expect(thermostat.powerSavingMode).toBe(true)
  });

  describe("up", function() {
    it("increases temperature", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("down", function() {
    it("decreases temperature", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot decrease temp below 10 degrees", function() {
      for (var i = 20; i > 10; i--) {
        thermostat.down();
      };
      expect(function () { thermostat.down() }).toThrow('Temperature at minimum');
    });
  });
});
