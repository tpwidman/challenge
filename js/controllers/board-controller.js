//actions within the board
TrelloClone.BoardController = Ember.ObjectController.extend({
    actions: {
        editBoard: function(){
            this.set('isEditing', true);
        },
        acceptChanges: function (){
            this.set('isEditing', false);
            if (Ember.isEmpty(this.get('model.boardName'))) {
                this.send('removeBoard');
            } else {
                this.get('model').save();
            }
        },
        isEditing: false,
        //delete the board
        removeBoard: function(){
            var board = this.get('model');
            board.deleteRecord();
            board.save();

        },
        // create a new item on the board
        createItem: function(){
            var board = this.get('model'),
            item;

            item = this.store.createRecord( 'item', {
                task: this.get('task'),
                board: board     
            });
            //save item you just created then push the new object to the board
            item.save().then( function(){
                var items = board.get('items');
                items.then( function(){
                    items.pushObject(item);
                    board.save();
                });
            });
            //clear the "New Task" text field
            this.set('task','');
        }
    }
})
//actions for the array of boards
TrelloClone.BoardsController = Ember.ArrayController.extend({
    actions: {
        //new board in array of boards
        createBoard: function(){
            //create the new board model
            var board = this.store.createRecord('board',{
                boardName : this.get('boardName')
            });
            //clear the "New Board" text field
            this.set('boardName', '');
            //save the new model
            board.save();
        }
    }
});