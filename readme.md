Polaris NG Route Interview
===

[lecture video](https://vimeo.com/285014629)

Step 1:
---

source angular and angular-route (html, source angular first)
```
<script src="vendors/angular.min.js"></script>
<script src="vendors/angular-route.min.js"></script>
```

create angular app with "ngRoute' dependency (server.js):
```
const myApp = angular.module( 'myApp', [ 'ngRoute' ] );
```

Step 2:
---

set up basic app config and view files (client.js)

```
myApp.config( function( $routeProvider ){
    $routeProvider.when( '/', {
        templateUrl: 'views/home.html'
    }) // end /
    .when( '/blue', {
        templateUrl: 'views/blue.html'
    }) // end blue
    .when( '/red', {
        templateUrl: 'views/red.html'
    }) // end red
    .otherwise({
        templateUrl: 'views/404.html'
    }) // end otherwise
}) // end config
```

make sure the html files are in the public/views folder. They should contain somethign simple like the following:
```
<h1>Home</h1>
<p>You are now at home</p>
```

Step 3
---

add and test nav (index.html)

```
<nav>
    <li><a href="/">Home</a></li>
    <li><a href="#!/blue">Blue</a></li>
    <li><a href="#!/red">Red</a></li>
</nav>
```

Step 4
---

add controllers and link to views (client.js)

```
.when( '/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as rc'
    }) // end red
```

```
myApp.controller( 'RedController', function(){
    console.log( 'Red Controller is here!!!!' );
}) // end red Controller
```