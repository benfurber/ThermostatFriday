
const startingTemp = 20;
const powerSavingMax = 25;
const minumumTemp = 10;
const max = 32

function Thermostat() {
  this.temperature = startingTemp;
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode === true && this.temperature < powerSavingMax) {
    this.temperature += 1;
  } else if (this.powerSavingMode === false && this.temperature < max) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > minumumTemp) {
    this.temperature -=1;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = startingTemp;
};

Thermostat.prototype.powerUsageCheck = function() {
  if (this.temperature <= 18) {
    return 'low-usage';
  } else if (this.temperature <= 25) {
    return 'medium-usage';
  } else {
    return 'high-usage'
  }
};

Thermostat.prototype.togglePowerMode = function() {
  this.powerSavingMode = !this.powerSavingMode;

  if (this.powerSavingMode === true && this.temperature > powerSavingMax) {
      this.temperature = powerSavingMax;
  };
};
