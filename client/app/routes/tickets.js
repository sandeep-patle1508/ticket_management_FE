import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params) {
    return this.store.query('ticket', { page: {
        number: params.page,
        size: params.size
      }
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  },

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
