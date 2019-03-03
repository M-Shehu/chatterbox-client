var RoomsView = {

  $button: $('#rooms #roomAdd button'),
  $select: $('#rooms #roomSelect select'),

  initialize: function() {
  
    RoomsView.$button.on('click', RoomsView.addRoom);

    $('.selectRoom').change(function(){
      MessagesView.render();
    });

    this.selectWheelRender();
  },

  
  selectWheelRender: function() {
    this.$select.empty();
    for (const room in roomStorage) {
      if (room !== '' && room !== 'undefined' && room !== 'null') {
        this.$select.append(`<option value="selectOptions">${room}</option>`);
      }
    }
  },


  addRoom: function() {
    var newRoom = prompt('Please type the name of the new room')
    var message = {
      username: '',
      text: '',
      roomname: newRoom
    };
    Parse.create(message);
    $('#rooms #roomSelect select').prepend(`<option value="selectOptions">${newRoom}</option>`);
  }
};
