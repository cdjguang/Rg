'use strict';

/**
 * Config for the router
 */
angular.module('app')
	.run(
		['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]
	)
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider
					.otherwise('/app/a');
				$stateProvider
					.state('app', {
						abstract: true,
						url: '/app',
						templateUrl: 'tpl/app.html'
					})
					//            .state('app.in', {
					//                url: '/in',
					//                template: '<div ui-view class="fade-in-up"></div>'
					//            })
					.state('app.a', {
						url: '/a',
						templateUrl: 'tpl/a.html',
						controller: 'ChangeCtrl'
					})
					.state('app.b', {
						url: '/b',
						templateUrl: 'tpl/b.html'
					})
			}
		]
	);