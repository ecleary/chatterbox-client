var Messages = {

  getMessages: function() {
    let successCB = function(data) { Messages.handleMessages(data); };
    Parse.readAll(successCB);
  },

  handleMessages: function(data) {
    for (let msgObj of data.results) {
      console.log(msgObj);
      MessagesView.renderMessage(msgObj);
    }
  }
};