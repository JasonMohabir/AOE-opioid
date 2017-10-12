var fs = require('fs')

var csvFile = fs.readFile('Opiod Deaths by County 1999-2015.csv', function(err, data) {
  if (err) {
    throw err;
  }
  data_array = data.toString().split("\n");
  for(var i = 0; i < data_array.length; i++) {
    data_array[i] = data_array[i].split("\t");
  }
  console.log(data_array);
});
