TrelloClone.Task = DS.Model.extend({
  name: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  board: DS.belongsTo('board', {async:true})
  
});

TrelloClone.Task.FIXTURES = [
    {
        id: 1,
        name: 'Use flat-edge as a guide for writing straight lines',
        isCompleted: false,
        board:1
    },
    {
        id: 2,
        name: 'Erase',
        isCompleted: false,
        board:1
    },
    {
        id: 3,
        name: 'Plant a seed',
        isCompleted: false,
        board:1
    },
    {
        id: 4,
        name: 'Train a plant to grow upward',
        isCompleted: false,
        board:1
    },
    {
        id: 5,
        name: 'Use flat-edge as a level with string and weights on either ends',
        isCompleted: false,
        board:1
    },
    {
        id: 6,
        name: 'Use as a bookmark while reading',
        isCompleted: false,
        board:1
    },
        {
        id: 7,
        name: 'Make some popsicles and use as a popsicle stick',
        isCompleted: false,
        board:1
    },
    {
        id: 8,
        name: 'Stir a drink',
        isCompleted: false,
        board:1
    },
    {
        id: 9,
        name: 'Use as a spool for a kite',
        isCompleted: false,
        board:1
    },
    {
        id: 10,
        name: 'Use to reset some small electronics',
        isCompleted: false,
        board:1
    }
];