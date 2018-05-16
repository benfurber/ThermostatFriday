const startingTemp = 20

function Thermostat() {
  this.temperature = startingTemp;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) {
    throw "Temperature at minimum";
  } else {
    this.temperature -=1;
  }
};
