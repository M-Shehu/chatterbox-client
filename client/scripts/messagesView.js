var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  
  render: function() {
    console.log(roomStorage);
    var html = '';
    var compiled = MessageView.render;
    var room = $('.selectRoom').children("option:selected").text();
    for (var key in roomStorage) {
      if (key === room) {
        for (let i = 0; i < roomStorage[key].length; i++) {
          console.log(roomStorage[key][i])
          html += compiled(roomStorage[key][i]);
        }
      }
    }
    this.$chats.append(html);
  },
  clear: function() {
    this.$chats.empty();
  }, 
  addToScreen: function(message) {
    var template = MessageView.render;
    this.$chats.append(template(message));
  }
};