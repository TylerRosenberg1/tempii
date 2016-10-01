"use strict";

(function() {
  angular
  .module("tempii")
  .controller("tempiiIndexController", [
    "$http",
    tempiiIndexControllerFunction
  ])

  function tempiiIndexControllerFunction($http) {
    var vm = this;
    vm.city;
    vm.state;

    vm.search = function(city, state) {
      $http({
        method: 'POST',
        url: 'http://localhost:7500/search',
        data: {city: vm.city.split(' ').join('_'), state: vm.state}
      }).then(function successCallback(res) {
        vm.today = res.data.today;
        vm.yesterday = res.data.yesterday;
        if (vm.today.high.fahrenheit > vm.yesterday.high) {
          console.log("pos");
          vm.diffPositive = vm.today.high.fahrenheit - vm.yesterday.high
        } else {
          console.log("neg");
          vm.diffNegative = vm.yesterday.high - vm.today.high.fahrenheit
        }
      })
    }
  }

}())
