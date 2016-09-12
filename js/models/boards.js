TrelloClone.Board = DS.Model.extend({
  title: DS.attr('string'),
});

TrelloClone.Board.FIXTURES = [
    {
        id: 1,
        name: 'Things to do with a Pencil',
        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        name: 'Things to do with a Coin'
    },
    {
        id: 3,
        name: 'Things to do with a Sock'
    }
];