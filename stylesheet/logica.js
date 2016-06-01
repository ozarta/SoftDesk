var app = angular.module('softdesk',['ui.router']);

app.directive('barranav',function () {
    return{
        restrict: 'E',
        templateUrl: 'barraleft.html'
    }
})

app.directive('barrabusqueda',function () {
    return{
        restrict: 'A',
        templateUrl: 'barratop.html'
    }
})

app.config(['$stateProvider','$urlRouterProvider',function (stateProvider,urlRouterProvider) {
    stateProvider
        .state('stiker',{
            url: '/stiker',
            templateUrl: 'stiker.html'

        })
        .state('nuevo',{
            url: '/nuevo',
            templateUrl: 'new.html'

        })
        .state('busqueda',{
            url: '/busqueda',
            templateUrl: 'busqueda.html'

        })
        .state('busquedaexterno',{
            url: '/busquedaexterno',
            templateUrl: 'busqueda_Externo.html'

        })
        .state('entrada',{
            url: '/entrada',
            templateUrl: 'entrada.html'

        })
        .state('salida',{
            url: '/salida',
            templateUrl: 'salida.html'

        })
        .state('solicitud',{
            url: '/solicitud',
            templateUrl: 'solicitud.html'

        })
        .state('archivado',{
            url: '/archivado',
            templateUrl: 'archivado.html'

        })
        .state('digitalizado',{
            url: '/digitalizado',
            templateUrl: 'digitalizado.html'

        })
}]);

