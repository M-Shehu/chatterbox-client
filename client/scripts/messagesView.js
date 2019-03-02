var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var room = $('#selectRoom').val();
    MessageView.render(room);
    console.log(roomStorage);
    this.$chats.append(MessageView.render(room));
  },

  render: function() {
    var room = $('#selectRoom').val();
    this.$chats.append(MessageView.render(room));
  }

};