// initialize the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mapboxAccessToken = {pk.eyJ1IjoicmF5NzI1IiwiYSI6ImNqOTNpeXNjYTNzemgycW1iMTVobjg1ZWoifQ._Zd7XVxCKKSBKwZt9Z2mVw};

// load a tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoicmF5NzI1IiwiYSI6ImNqOTNpeXNjYTNzemgycW1iMTVobjg1ZWoifQ._Zd7XVxCKKSBKwZt9Z2mVw}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmF5NzI1IiwiYSI6ImNqOTNpeXNjYTNzemgycW1iMTVobjg1ZWoifQ._Zd7XVxCKKSBKwZt9Z2mVw'
}).addTo(mymap);
