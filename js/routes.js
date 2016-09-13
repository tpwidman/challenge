TrelloClone.ItemsIndexRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('items')
    }
})

TrelloClone.ItemsRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('items');
    }
});