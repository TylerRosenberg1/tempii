"use strict";

(function() {
  angular
  .module("tempii", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    routerFunction
  ])

  function routerFunction($stateProvider) {
    $stateProvider
    .state("tempiiIndex", {
      url: "/tempii",
      controller: "tempiiIndexController",
      controllerAs: "vm",
      templateUrl: "views/tempii/index.html"
    })
  }

}())
