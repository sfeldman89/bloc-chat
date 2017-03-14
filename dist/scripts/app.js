(function () {
	function config($stateProvider, $locationProvider) {
        
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
        
        $stateProvider
            .state('rooms', {
                url: '/',
                controller: 'RoomsCtrl as rooms',
                templateUrl: '/templates/home.html'
        });
	}
    
    
    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})();