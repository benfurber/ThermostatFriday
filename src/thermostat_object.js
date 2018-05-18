thermostat = new Thermostat();

$('document').ready(function() {

  var tempUpdate = function() {
    $('#temperature').text(function(){
      return thermostat.temperature;
    });

    $('#temperature').attr('class', function() {
      return thermostat.powerUsageCheck();
    });
  }

  var safeModeMessage = function() {
    $('#saveMode').text(function() {
      if (thermostat.powerSavingMode) {
        return "Turn Save Mode Off"
      } else {
        return "Turn Save Mode On"
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
  });

});
