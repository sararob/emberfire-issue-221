import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTicket: function() {
            var openStatus;
            if (this.get('open') === 'yes') {
                openStatus = true;
            } else {
                openStatus = false;
            }
            var newTicket = this.store.createRecord('ticket', {
                name: this.get('name'),
                open: openStatus
            });
            newTicket.save();
        }
    }
});
