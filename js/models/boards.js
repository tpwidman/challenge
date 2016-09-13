TrelloClone.Board = DS.Model.extend({
    board_name: DS.attr(),
    items: DS.hasMany('item', {async:true})
});
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