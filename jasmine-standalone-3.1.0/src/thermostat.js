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
