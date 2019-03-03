var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // setInterval(function(){ 
    //   roomStorage = {};
    //   App.fetch(App.stopSpinner); 
    // }, 10000);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      
      var messageArr = data.results;
      console.log(data);
      for (var i = 0; i < messageArr.length; i++) {
        var message = {
          username: null,
          text: null,
          roomname: null
        };
        
        message['username'] = _.escape(messageArr[i].username);
        message['text'] = _.escape(messageArr[i].text);
        message['roomname'] = _.escape(messageArr[i].roomname);
        // message[messageArr[i].username] = messageArr[i].text;
        if (Array.isArray(roomStorage[messageArr[i].roomname])) {
          roomStorage[messageArr[i].roomname].push(message);
        } else {
          roomStorage[messageArr[i].roomname] = [];
          roomStorage[messageArr[i].roomname].push(message);
        }

      }
      console.log(roomStorage);
      RoomsView.selectWheelRender();
      MessagesView.render();
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
