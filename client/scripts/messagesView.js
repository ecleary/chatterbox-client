var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  testMessage: {
    text: 'got you',
    username: 'errol',
    roomname: 'best room'
  },

  renderMessage: function() {
    // MessagesView.$chats.append('<div></div>');
    MessagesView.$chats.append(MessageView.render(MessagesView.testMessage));
  }

};