"use strict";

(function() {
  angular
  .module("tempii")
  .controller("tempiiIndexController", [
    "$http",
    "tempiiFactory",
    tempiiIndexControllerFunction
  ])

  function tempiiIndexControllerFunction($http, tempiiFactory) {
    var vm = this;
    vm.city;
    vm.state;

    vm.search = function() {
      tempiiFactory.search(vm.city, vm.state)
      .then(function successCallback(res) {
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
            vm.diffNegative = vm.yesterday.high - vm.today.high.fahrenheit
            vm.diffPositive = null;
          }
        }
      }, function errorCallback(res) {

      })
    }
  }

}())
