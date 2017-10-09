import Ember from 'ember';
import setRole from 'client/mixins/set-role';


export default Ember.Controller.extend(setRole,{
  session: Ember.inject.service('session'),

  init() {
    this._super();
    this.setRole();
  },

  actions:{
    downloadPDF(){
      let url = `http://localhost:3000/api/v1/tickets/pdf_download`;
      Ember.$.ajax({
          type: "POST",
          url: url,
          success: function(data) {
            window.open(data, '_blank');
            return data;
          }
      });
    }
  }
});
