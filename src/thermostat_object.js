thermostat = new Thermostat();

$('document').ready(function() {

  var tempUpdate = function() {
    $('#temperature').text(function(){
      return thermostat.temperature;
    });

    $('#temperature').attr('class', function() {
      thermostat.powerUsageCheck();
      return thermostat.powerUsage;
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

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      q: 'London,uk',
      appid: '096fd66680a74ece3e94889a8179fd03'
    },
    type: "GET",
    dataType: "json",
  });

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
