window.TrelloClone = Ember.Application.create();

TrelloClone.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function(){
    this.resource('boards',{path:'/'});
});