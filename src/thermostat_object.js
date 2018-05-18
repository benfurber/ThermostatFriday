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

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      q: 'London',
      appid: '096fd66680a74ece3e94889a8179fd03',
      units: 'metric'
    },
    type: "GET",
    dataType: "json",
    error: function() {
      $('#message').append("Weather API Error");
    },
    success: function(data) {
      $('#message').append(function() {
        return `${Math.round(data['main']['temp'])}`;
      });
    },
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
