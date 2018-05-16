describe("Thermostat", function(){
  var thermostat
  const startingTemp = 20
  const powerSavingMax = 25
  const minumumTemp = 10

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

    it("cannot increase temp above 25 if powerSavingMode is on", function() {
      thermostat.powerSavingMode = true;
      for (var i = startingTemp; i < powerSavingMax; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() }).toThrow("Maximum temperature")
    });
  });

  describe("down", function() {
    it("decreases temperature", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot decrease temp below 10 degrees", function() {
      for (var i = startingTemp; i > minumumTemp; i--) {
        thermostat.down();
      };
      expect(function () { thermostat.down() }).toThrow('Temperature at minimum');
    });
  });
});
