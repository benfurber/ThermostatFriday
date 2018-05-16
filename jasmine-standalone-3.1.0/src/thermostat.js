const startingTemp = 20;
const powerSavingMax = 25;
const minumumTemp = 10;

function Thermostat() {
  this.temperature = startingTemp;
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode === true && this.temperature === 25) {
    throw 'Maximum temperature'
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature === minumumTemp) {
    throw "Temperature at minimum";
  } else {
    this.temperature -=1;
  }
};
