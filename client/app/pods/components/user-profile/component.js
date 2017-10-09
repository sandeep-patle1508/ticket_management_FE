import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: 'user-info',
  isAdmin: null,
  isAgent: null,

  userRole: Ember.computed('isAdmin','isAgent', function(){
      let admin = this.get('isAdmin');
      let agent = this.get('isAgent');

      if (admin){
        return 'Welcome: Admin ';
      }else if(agent){
        return 'Welcome: ';
      }else{
        return 'Welcome: User ';
      }
  }),

});
