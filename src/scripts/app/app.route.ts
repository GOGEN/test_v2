'use strict';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<div>HOME</div>'
    });

  $urlRouterProvider.otherwise('/');
}
