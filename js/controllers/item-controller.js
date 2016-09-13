//object controller for the items model
TrelloClone.ItemController = Ember.ObjectController.extend({
    itemController:'items',
    //the isEditing property is turned on by the input helper
    isEditing: false,
    newBoard: null,
    //needs takes in an array of controller names, we need to grab the boards controller
    needs:['boards'],

    updateBoard: function(){
        var item = this.get('model'),
        board = item.get('board'),
        newBoard = this.get('newBoard');

        this.removeItemfromBoard();

        newBoard.get('items').pushObject(item);
        item.set('board', this.get('newBoard'));
        item.save().then( function(){
            board.save();
            newBoard.save();
        });
    //This is like an event listener for updating the board
    //Observers never fire until after the initialization of an object is complete.
    }.observes('newBoard'),

    removeItemfromBoard: function(){
        var item = this.get('model'),
        board = item.get('board');
        board.get('items').removeItem(item);
    },
    action: {
        editItem: function(){
            this.set('isEditing', true);
        },
        deleteItem: function(){
            this.removeItemfromBoard();
            this.updateModel('deleteRecord');
        },
        updateItem: function(){
            this.set('isEditing', false);
            this.updateModel();
        }
    }

});