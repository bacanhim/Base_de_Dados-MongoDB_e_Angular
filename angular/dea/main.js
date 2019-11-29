var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.dados=[
    {name:'Physics',marks:70},
    {name:'Chemistry',marks:80},
    {name:'Math',marks:65},
    {name:'English',marks:75},
    {name:'Hindi',marks:67}
    ];
})