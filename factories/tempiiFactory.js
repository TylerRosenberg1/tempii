"use strict";

(function() {
  angular
  .module("tempii")
  .factory("tempiiFactory", [
    "$http",
    tempiiFactoryFunction
  ])

  function tempiiFactoryFunction($http) {
    return {
      search: function(city, state) {
        return $http({
          method: 'POST',
          url: 'https://tempii.herokuapp.com/search',
          data: {city: city.split(' ').join('_'), state: state}
        })
      }
    }
  }
}())
