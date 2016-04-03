'use strict';

var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY', 
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback:'JSON_CALLBACK',
  }, {
    get: {
      method:'JSONP'
    }
  });

  return {
    //getAtLocation: function(lat, lng) {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  } 
}];

angular.module('starter.services', ['ngResource'])
.factory('Cities', function() {
var cities = [
    { id: 0, name: 'New York City' ,lat: 40.7127 , lgn: -74.0059 },
    { id: 1, name: 'Miami', lat:25.47 , lgn: -80.13 },
    { id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
    { id: 3, name: 'Los Angeles' ,lat: 34.0500 , lgn: -118.2500 },
    { id: 4, name: 'Dallas' ,lat: 32.7758 , lgn:-96.7967  },
    { id: 5, name: 'Frankfurt' ,lat:50.1117 , lgn: 8.6858 },
    { id: 6, name: 'New Delhi' ,lat:28.6100 , lgn: 77.2300 },
    { id: 7, name: 'Mumbai' ,lat:18.59 , lgn: 72.50 },
    { id: 8, name: 'Beijing' ,lat:39.47, lgn: 116.24},
    { id: 9, name: 'Tokyo' ,lat:35.41 , lgn: 139.42},
    { id: 10, name: 'Durban' ,lat:-29.53, lgn: 31.03 },
    { id: 11, name: 'Sydney' ,lat:-33.52, lgn: 151.13 },
    { id: 12, name: 'Rio de Janeiro' ,lat:-22.55 , lgn:-43.12 }
  ];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      // Simple index lookup
      return cities[cityId];
    }
  }
}).
factory('DataStore', function() {
    //create datastore with default values
    var DataStore = {
        city:       'New York City',
        latitude:   40.7127,
        longitude:  -74.0059};

    DataStore.setCity = function (value) {
       DataStore.city = value;
    };

    DataStore.setLatitude = function (value) {
       DataStore.latitude = value;
    };

    DataStore.setLongitude = function (value) {
       DataStore.longitude = value;
    };
   
    return DataStore;
})
.factory('Weather', forecastioWeather);
