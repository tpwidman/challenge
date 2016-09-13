TrelloClone.Task = DS.Model.extend({		
    task: DS.attr('string'),		
    isCompleted: DS.attr('boolean'),		
    board: DS.belongsTo('board', {async:true})		
    
});		
 		
TrelloClone.Task.FIXTURES = [		
    {		
        id: 1,		
        task: 'Use flat-edge as a guide for writing straight lines',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 2,		
        task: 'Erase',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 3,		
        task: 'Plant a seed',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 4,		
        task: 'Train a plant to grow upward',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 5,		
        task: 'Use flat-edge as a level with string and weights on either ends',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 6,		
        task: 'Use as a bookmark while reading',		
        isCompleted: false,		
        board:1		
    },		
        {		
        id: 7,		
        task: 'Make some popsicles and use as a popsicle stick',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 8,		
        task: 'Stir a drink',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 9,		
        task: 'Use as a spool for a kite',		
        isCompleted: false,		
        board:1		
    },		
    {		
        id: 10,		
        task: 'Use to reset some small electronics',		
        isCompleted: false,		
        board:1		
    }		
]; 