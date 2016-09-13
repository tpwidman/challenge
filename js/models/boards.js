TrelloClone.Board = DS.Model.extend({
    boardName: DS.attr(),
    items: DS.hasMany('item', {async:true})
});
DS.Board.FIXTURES = [
    {
        boardName: 'Things to do with a pencil',
        items: 1
    },
    {
        boardName: 'Things to do with a sock',
        items: 2  
    },
    {
        boardName: 'Things to do with a paper clip',
        items: 2  
    },
]