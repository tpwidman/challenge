Todos.BoardController = Ember.ObjectController.extend({
    actions:{
    editBoard: function () {
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeBoard');
      } else {
        this.get('model').save();
      }
    },
    removeBoard: function () {
      var board = this.get('model');
      board.deleteRecord();
      board.save();
    }
  },
  isEditing: false,
  
})

Todos.BoardsController = Ember.ArrayController.extend({
  itemController: 'title',

  actions: {
    createBoard: function () {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var board = this.store.createRecord('board', {
        title: title,
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});