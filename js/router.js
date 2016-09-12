TrelloClone.Router.map(function () {
  this.resource('task', { path: '/' }, function () {
    // additional child routes    
    this.route('active');
    this.route('completed');
  });
});

TrelloClone.TasksRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('task');
  }
});

TrelloClone.TaskIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('tasks');
  }
});

TrelloClone.TasksActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('task', function (task) {
      return !task.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('task/index', {controller: controller});
  }
});

TrelloClone.TasksCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('task', function (task) {
      return task.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('task/index', {controller: controller});
  }
});