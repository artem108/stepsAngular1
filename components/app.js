var app = angular.module('app', []);

app.controller('mainCntrl', function($http, mainSvc) {
  var vm = this;
})


app.service("mainSvc", function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts')
    }
})
