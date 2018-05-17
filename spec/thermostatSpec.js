describe("Thermostat", function(){
  var thermostat
  const startingTemp = 20
  const powerSavingMax = 25
  const minumumTemp = 10
  const max = 32

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
      thermostat.up();
      expect(thermostat.temperature).toEqual(powerSavingMax)
    });

    it("cannot increase temp above 32 if powerSavingMode is off", function () {
      thermostat.powerSavingMode = false;
      for (var i = startingTemp; i < max; i++) {
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.temperature).toEqual(max);
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
      thermostat.down();
      expect(thermostat.temperature).toEqual(minumumTemp);
    });
  });

  describe("reset", function() {
    it("resets thermostat to starting temp", function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(startingTemp);
    });
  });

  describe("powerUsage", function() {
    it("should return low if temperature is below 18", function() {
      thermostat.temperature = 16
      thermostat.powerUsageCheck();
      expect(thermostat.powerUsage).toEqual('low-usage');
    });

    it("should return low if temperature is below 18", function() {
      thermostat.temperature = 23
      thermostat.powerUsageCheck();
      expect(thermostat.powerUsage).toEqual('medium-usage');
    });

    it("should return high if temperature is above 25", function() {
      thermostat.temperature = 27
      thermostat.powerUsageCheck();
      expect(thermostat.powerUsage).toEqual('high-usage');
    });
  });

  describe("togglePowerMode", function() {
    it("if powerSavingMode is on, toggles it off", function() {
      thermostat.togglePowerMode();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it("if powerSavingMode is off, toggles it on", function() {
      thermostat.powerSavingMode = false
      thermostat.togglePowerMode();
      expect(thermostat.powerSavingMode).toBe(true);
    })
  });

});
