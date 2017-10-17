var fs = require('fs')
var request = require('request');
var sleep = require('sleep');

var csvFile = fs.readFile('Opiod Deaths by County 1999-2015.csv', function(err, data) {
  if (err) {
    throw err;
  }
  // format the data as best as we can
  data_array = data.toString().split("\n");
  for (var i = 0; i < data_array.length; i++) {
    data_array[i] = data_array[i].split("\t");
  }

  // first get a list of all unique counties
  var counties = [];
  for(var j = 1; j < data_array.length; j++) {
    // if the county isn't in the list of counties
    if(counties.indexOf(data_array[j][3]) === -1) {
      counties.push(data_array[j][3]);
    }
  }

  var county_key = {};

  // for each county make geocoding request
  for(var k = 0; k < 30; k++) {
    var format_name = counties[k].slice(0,-1).substr(1);
    var website_string = `https://maps.googleapis.com/maps/api/geocode/json?address=${format_name}&key=AIzaSyCYDdjxFPVgyCik1xIv4ZK-Z8OU-nSkbTo`;
    request(website_string, function(err, res, body) {
      if(err) { console.log(err); }
      var htmlJSON = JSON.parse(body);
      try {
        county_key.format_name = htmlJSON.results[0].geometry.location;
        console.log(county_key);
      } catch(error) {
        console.log(`${k} position undefined in counties list`);
      }
    });
    //console.log(county_key);
    /*
    // make sure we don't pass API allowed calls
    if(k % 50 === 0 && k > 0) {
      sleep.sleep(1);
    }
    */
  }

  // create geoJSON
});
