var MessagesView = {

  $chats: $('#chats'),

  $username: $('.chat .username'),

  initialize: function() {
    this.render();
    $(document).on('click', '.chat .username', this.addFriend);
  },
  
  render: function() {
    this.$chats.empty();
    var html = '';
    var compiled = MessageView.render;
    var room = $('.selectRoom').children("option:selected").text();
    for (var key in roomStorage) {
      if (key === room) {
        for (let i = 0; i < roomStorage[key].length; i++) {
          if (roomStorage[key].message !== '') {
            html += compiled(roomStorage[key][i]);
          }
        }
      }
    }
    this.$chats.append(html);
    // $(document).css({'color': 'white'});
  },

  clear: function() {
    this.$chats.empty();
  }, 

  addToScreen: function(message) {
    var template = MessageView.render;
    this.$chats.prepend(template(message));
  },

  addFriend: function(event) {
    var cllassName = this.className.slice(9);
    $(`.${cllassName}`).css({
      'color' : 'blue',
      'font-style' : 'bold',
      'font-size' : '20px'
    });
    Friends[cllassName] = cllassName;
  }
};