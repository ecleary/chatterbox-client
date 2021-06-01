var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Messages.getMessages();
  },

  render: function() {
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));
  }

};