var app = angular.module('myApp', ['ui.router']);
app.controller('myCtrl', function ($scope, $http) {
    app.config(function ($stageProvider) {
        var page1State = {
            name: 'Exercicio 1',
            url: '/exercicio1',
            controller: 'myCtrl',
            templateUrl: 'exercicio1.html'
        }
        var page2State = {
            name: 'Exercicio 2',
            url: '/exercicio2',
            controller: 'myCtrl',
            templateUrl: 'exercicio2.html'
        }
        $stageProvider.state(page1State);
        $stageProvider.state(page2State);
    })
    $scope.mostrarLista = function () {
        $http({
            method: "GET",
            url: "dados.json"
        }).then(function mysuccess(response) {
            var data = response.data.records;
            data.sort(function (a, b) {
                return a.Country.localeCompare(b.Country);
            });
            $scope.clientes = data;
        }, function myError(response) {
            $scope.clientes = response.statusText;
        });
    }
    $scope.apagarItem = function ($index) {
        $scope.clientes.splice($index, 1);
    };

});