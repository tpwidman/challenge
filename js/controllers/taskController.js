TrelloClone.TaskController = Ember.ObjectController.extend({
  actions: {
    editTask: function () {
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeTask');
      } else {
        this.get('model').save();
      }
    },
    removeTask: function () {
      var task = this.get('model');
      task.deleteRecord();
      task.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as  setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});

TrelloClone.TasksController = Ember.ArrayController.extend({
  actions: {
    createTask: function () {
      // Get the task title set by the "New Task" text field
      var name = this.get('newName');
      if (!name.trim()) { return; }

      // Create the new Task model
      var task = this.store.createRecord('task', {
        name: name,
        isCompleted: false
      });

      // Clear the "New Task" text field
      this.set('newName', '');

      // Save the new model
      task.save();
    },
    clearCompleted: function () {
      var completed = this.filterProperty('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  remaining: function () {
    return this.filterProperty('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  hasCompleted: function () {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function () {
    return this.filterProperty('isCompleted', true).get('length');
  }.property('@each.isCompleted'),
  
  allAreDone: function (key, value) {
    if (value === undefined) {
      return !!this.get('length') && this.everyProperty('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
});

TrelloClone.EditTaskView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-task', TrelloClone.EditTaskView);