import Ember from 'ember';

export default Ember.Controller.extend({
    tickets: function() {
        return this.get('model').filterBy('open');
    }.property('model.@each.open'),
    ticketChanged: function() {
        var openStatus = this.get('model').filterBy('isDirty');
        openStatus.map(function(ticket) {
            return ticket.save();
        });
    }.observes('model.@each.open')
});
