var FormView = {

  $form: $('form'),

  // $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    
    // FormView.$form.on('message', )
    // console.log($("#message").val());
    // console.log(window.location.search.slice(10));



  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = {
      username: null,
      text: null,
      roomname: null
    };
    message.text = $("#message").val(); 
    message.username = window.location.search.slice(10);
    message.roomname = $(".selectRoom").children("option:selected").text();
    
    // want to send the message to the server
    Parse.create(message);
    // save to messages storage
    Messages[message.text] = message;
    // want to post to the screen by calling messageView.js
    MessagesView.addToScreen(message);
    // debugger;
    event.preventDefault();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }, 

  render: function(room) {
    MessagesView.clear();
    MessagesView.render();
  }
};