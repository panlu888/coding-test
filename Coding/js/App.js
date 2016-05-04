$(document).ready(function() {
    var PersonalInfo = Backbone.Model.extend({
        defaults: {
          fname: '',
          lname: '',
          addOne: '',
          addTwo: '',
          city: '',
          state: '',
          zipcode: ''      
      }
  });
    
    var personalInfo = new PersonalInfo();

    var First = Backbone.View.extend({
        el: $('#content'),
        
        firstTemplate: _.template($('#first').html()),

        events: {
            'click #nextpage': 'gotoSecondPage'
        },
        
        initialize: function() {
          var self = this;
          this.render();     
      },

      render: function() {
          this.$el.html(this.firstTemplate());                             
          return this;
      },

      gotoSecondPage: function() {
          personalInfo.set({ fname: $('#fname').val(), lname: $('#fname').val() });
          new Second();  
      }    
  });

    var Second = Backbone.View.extend({
        el: $('#content'),

        secondTemplate: _.template($('#second').html()),

        events: {
            'click #complete': 'gotoThirdPage'
        },
        
        initialize: function() {
          var self = this;
          this.render();    
      },

      render: function() {
          this.$el.html(this.secondTemplate());                             
          return this;
      },

      gotoThirdPage: function() {
          personalInfo.set({ addOne: $('#addOne').val(), addTwo: $('#addTwo').val(), city: $('#city').val(), state: $('#state').val(), zipcode: $('#zipcode').val() });
          new Third();                
      }
  });

    var Third = Backbone.View.extend({
       el: $('#content'),

       thirdTemplate: _.template($('#third').html()),

       initialize: function() {
          var self = this;
          this.render();    
      },

      render: function() {
          this.$el.html(this.thirdTemplate(personalInfo.toJSON()));                             
          return this;
      }
  });

    new First();
});

