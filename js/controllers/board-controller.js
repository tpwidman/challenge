TrelloClone.BoardController = Ember.ObjectController.extend({
    actions: {
        removeBoard: function(){
            var board = this.get('model');
            board.deleteRecord();
            board.save();

        },
        createItems: function(){
            var board = this.get('model'),
            item;

            item = this.store.createRecord( 'item', {
                task: this.get('task'),
                board: board     
            });
            item.save().then( function(){
                var items = board.get('items');
                items.then( function(){
                    items.pushObject(item);
                    board.save();
                });
            });
            this.set('task','');
        }
    }
})

//new board in array of boards
TrelloClone.BoardsController = Ember.ArrayController.extend({
    actions: {
        createBoard: function(){
            //create the new todo model
            var board = this.store.createRecord('board',{
                boardName : this.get('boardName')
            });
            this.set('boardName', '');
            board.save();
        }
    }
});