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
      templateUrl: "views/index.html"
    })
    .state("error404", {
      url: "/404",
      controller: "error404Controller",
      controllerAs: "vm",
      templateUrl: "views/error404.html"
    })
  }

}())
