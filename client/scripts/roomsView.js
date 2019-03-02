var RoomsView = {

  $button: $('#rooms #roomAdd button'),
  $select: $('#rooms select'),
  $textArea: $('#rooms textarea'),

  initialize: function() {
    // RoomView.$button.on();
    // debugger;
    RoomsView.$button.on('click', RoomsView.addRoom);

    $('.selectRoom').change(function(){
      // RoomsView.selectWheelRender();
      FormView.render();
    });
  },

  selectWheelRender: function() {
    this.$select.empty();
    for (const room in roomStorage) {
      this.$select.append(`<option value="test">${room}</option>`);
    }
  },

  addRoom: function() {
    console.log('here');
    var newRoom = prompt('Please type the name of the new room')

    var message = {
      username: null,
      text: null,
      roomname: null
    };
    
    message.text = ""; 
    message.username = "";
    message.roomname = newRoom;

    Parse.create(message);
    // MessagesView.addToScreen(message);
    RoomsView.selectWheelRender();
  }
};
