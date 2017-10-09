import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    actions: {
      delete: function(ticket) {
        var _this = this;
        if (confirm("Want to delete this ticket?")) {
          ticket.destroyRecord().then(function() {
            _this.transitionTo('tickets.index');
          });
        }
      }
    }
});
