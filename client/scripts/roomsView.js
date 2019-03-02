var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $textArea: $('#rooms textarea'),

  initialize: function() {
    // RoomView.$button.on();
    // debugger;
    
    
  },

  render: function() {
    for (const room in roomStorage) {
      this.$select.append(`<option value="test">${room}</option>`);
      // console.log(room);
    }
    
  
    // console.log(roomStorage);
  }
};
