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

  var citySelected = function() {
    return $('#city-select-field').val();
  }

  var cityTemperature = function() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        q: citySelected,
        appid: '096fd66680a74ece3e94889a8179fd03',
        units: 'metric'
      },
      type: "GET",
      dataType: "json",
      error: function() {
        $('#theTemperature').text("Weather API Error");
      },
      success: function(data) {
        $('#theTemperature').text(function() {
          return `${Math.round(data['main']['temp'])}`;
        });
      },
    });
  };

  // When the page is ready to go, these run:

  tempUpdate();
  safeModeMessage();
  cityTemperature();

  $("#city-select-field").change(function() {
    citySelected();
    cityTemperature();
  });

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
