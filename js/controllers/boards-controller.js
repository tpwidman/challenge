//actions for the array of boards
TrelloClone.BoardsController = Ember.ArrayController.extend({
    itemController: 'boards',
    actions: {
        //new board in array of boards
        //not sure why it's not working
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