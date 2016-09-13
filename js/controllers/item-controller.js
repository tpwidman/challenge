TrelloClone.ItemController = Ember.ObjectController.extend({
    isEditing: false,
    newBoard: null,
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
    }.observes('newBoard'),

    removeItemfromBoard: function(){
        var item = this.get('model'),
        board = item.get('board');
        board.get('items').removeItem(item);S
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