window.TrelloClone = Ember.Application.create();

TrelloClone.ApplicationAdapter = DS.FixtureAdapter.extend();

TrelloClone.Router.map(function(){
    this.resource('boards',{path:'/'});
});