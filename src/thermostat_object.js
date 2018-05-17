thermostat = new Thermostat();

$('document').ready(function() {

  var tempUpdate = function() {
    $('#temperature').text(function(){
      return thermostat.temperature;
    });
  }

  var safeModeMessage = function() {
    $('#message').text(function() {
      if (thermostat.powerSavingMode) {
        return "Save mode: On"
      } else {
        return "Save mode: Off"
      };
    })
  }

  tempUpdate();
  safeModeMessage();

  $('#up').click(function() {
    thermostat.up();
    tempUpdate();
  });

  $('#down').click(function() {
    thermostat.down();
    tempUpdate();
  });

  $('#saveMode').click(function() {
    thermostat.togglePowerMode();
    tempUpdate();
    safeModeMessage();
  });

  $('#reset').click(function() {
    thermostat.reset();
    tempUpdate();
  })
});
