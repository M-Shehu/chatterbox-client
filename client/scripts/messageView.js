var MessageView = {

  render: function(room) {
    var compiled = _.template(`
     
      <div class="chat">
        <div class="username"> + <%= username %> + </div>
        <div class="message"> + <%= message %> + </div>
      </div>
      
    `);
    var html = '';
    for (var key in roomStorage) {
      console.log(key)
      console.log(room)
      if (key === room) {
        console.log(key)
        for (let i = 0; i < roomStorage[key].length; i++) {
          html += compiled(roomStorage[key][i]);
        }
      }
    }
    console.log(html)
    return html;
  }
};