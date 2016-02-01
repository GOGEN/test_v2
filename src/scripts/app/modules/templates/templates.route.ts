'use strict';

/** @ngInject */
export function routeConfig($stateProvider: angular.ui.IStateProvider) {
	$stateProvider
		.state('templates', {
			url: '/templates/*name',
			templateUrl: function($stateParams: angular.ui.IStateParamsService) {
				console.log($stateParams);
				return '/scripts/app/modules/templates/ui/' + $stateParams['name'] + '.html';
			},
		});
}
