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
        url: 'https://tempii.herokuapp.com/search',
        data: {city: vm.city.split(' ').join('_'), state: vm.state}
      }).then(function successCallback(res) {
        if (res.data.error) {
          vm.error = res.data.error;
        } else {
          vm.error = null;
          vm.today = res.data.today;
          vm.yesterday = res.data.yesterday;
          if (vm.today.high.fahrenheit > vm.yesterday.high) {
            vm.diffPositive = vm.today.high.fahrenheit - vm.yesterday.high
            vm.diffNegative = null;
          } else {
            console.log("negative");
            vm.diffNegative = vm.yesterday.high - vm.today.high.fahrenheit
            vm.diffPositive = null;
          }
        }
      }, function errorCallback(res) {

      })
    }
  }

}())
