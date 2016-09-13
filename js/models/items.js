TrelloClone.Items = DS.Model.extend({		
    task: DS.attr('string'),		
    isCompleted: DS.attr('boolean'),
    //'items' is a property belonging to the board model that has index based on which board it belongs to		
    items: DS.belongsTo('board', {async:true})		
    
});		
 		
TrelloClone.Items.FIXTURES = [		
    {		
        id: 1,		
        task: 'Use flat-edge as a guide for writing straight lines',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 2,		
        task: 'Erase',		
        isCompleted: false,		
        items:1		
    },		
    {		 
        id: 3,		
        task: 'Plant a seed',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 4,		
        task: 'Train a plant to grow upward',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 5,		
        task: 'Use flat-edge as a level with string and weights on either ends',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 6,		
        task: 'Use as a bookmark while reading',		
        isCompleted: false,		
        items:1		
    },		
        {		
        id: 7,		
        task: 'Make some popsicles and use as a popsicle stick',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 8,		
        task: 'Stir a drink',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 9,		
        task: 'Use as a spool for a kite',		
        isCompleted: false,		
        items:1		
    },		
    {		
        id: 10,		
        task: 'Use to reset some small electronics',		
        isCompleted: false,		
        items:1		
    }		
]; 