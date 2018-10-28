function PostList(mainSvc) {
  var vm = this;

  mainSvc.getPosts().then(function(res) {
      vm.posts = res.data
  })
}

app.component('postsList', {
  templateUrl: 'post-list/post-list.html',
  controller: PostList,
  controllerAs: 'vm'
})
