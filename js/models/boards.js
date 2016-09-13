TrelloClone.Board = DS.Model.extend({
    board_name: DS.attr(),
    //we need to specify that the board contains asyncronously loaded items
    items: DS.hasMany('item', {async:true})
});
//This is the loaded json data for the board model
TrelloClone.Board.FIXTURES = [
    {
        board_name: 'Things to do with a pencil',
        items: 1
    },
    {
        board_name: 'Things to do with a sock',
        items: 2  
    },
    {
        board_name: 'Things to do with a paper clip',
        items: 3  
    },
]