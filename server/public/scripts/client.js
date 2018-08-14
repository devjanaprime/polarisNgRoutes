// make sure you have injected ngRoute ------v
const myApp = angular.module( 'myApp', [ 'ngRoute' ] );

let redInput = '';

// step 2: set up app.config 
// step 3: set up views & templateUrls
myApp.config( function( $routeProvider ){
    $routeProvider.when( '/', {
        templateUrl: 'views/home.html'
    }) // end /
    .when( '/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as bc'
    }) // end blue
    .when( '/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as rc'
    }) // end red
    .otherwise({
        templateUrl: 'views/404.html'
    }) // end otherwise
}) // end config

myApp.controller( 'BlueController', function(){
    console.log( 'Blue Controller is here too...' );
}) // end red Controller

myApp.controller( 'RedController', function(){
    console.log( 'Red Controller is here!!!!' );
    const vm = this;
    vm.inputIn = redInput;
    vm.getInput = function(){
        console.log( 'in RedController getInput click', vm.inputIn );
        redInput = vm.inputIn;
    } // end getInput
}) // end red Controller