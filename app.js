var app = angular.module('app', []);

app.controller('mainCntrl', function($http, mainSvc) {
  this.hello = 'world';
  this.fruits = ['apples', 'oranges', 'grape'];
  this.alertMe = function() {
    alert('something')
  }


  var vm = this;

  $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
      vm.posts1 = res.data
    })

  // mainSvc.getPosts().then(function(res) {
  //     vm.posts = res.data
  // })
})

app.filter('makePlural', function() {
  return function(input) {
    return input + "s"
  }
})

app.service("mainSvc", function($http) {
  this.getPosts = function() {
  return $http.get('https://jsonplaceholder.typicode.com/posts')
    }
})
