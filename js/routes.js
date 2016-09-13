TrelloApp.BoardsRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('items');
    }
});