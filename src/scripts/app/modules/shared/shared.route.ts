
'use strict';

/** @ngInject */
export function routeConfig($stateProvider: angular.ui.IStateProvider) {
  $stateProvider
    .state('test', {
      url: '/test',
      template: '<test-widget/>'
    });
}
