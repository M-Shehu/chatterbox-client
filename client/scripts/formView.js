var FormView = {

  $form: $('form'),

  $formTextArea: $('input:text'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    var message = {
      username: window.location.search.slice(10),
      text: $("#message").val(),
      roomname: $(".selectRoom").children("option:selected").text()
    };
    
    // want to send the message to the server
    Parse.create(message);
    // want to post to the screen by calling messageView.js
    MessagesView.addToScreen(message);
    // Stop the browser from submitting the form
    event.preventDefault();
    // Clear the content of the form
    $('input:text').val("");
  },
  
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};