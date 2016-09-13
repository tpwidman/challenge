TrelloClone.Board = DS.Model.extend({
    name: DS.attr(),
    //we need to specify that the board contains asyncronously loaded items
    items: DS.hasMany('item', {async:true})
});
//This is the loaded json data for the board model
TrelloClone.Board.FIXTURES = [
    {
        name: 'Things to do with a pencil',
        items: 1
    },
    {
        name: 'Things to do with a sock',
        items: 2  
    },
    {
        name: 'Things to do with a paper clip',
        items: 3  
    },
]