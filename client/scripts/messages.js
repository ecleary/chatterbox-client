var Messages = {

  getMessages: function() {
    let successCB = function(data) { Messages.handleMessages(data); };
    Parse.readAll(successCB);
  },

  handleMessages: function(data) {
    // console.log(data);
    // let allMessages = Messages.getMessages();

    // console.log(allMessages);
    // allMessages['results'].forEach(function(msgObj) {
    //   console.log(msgOjb);
    // });

    for (let msgObj of data.results) {
      console.log(msgObj);
      MessagesView.renderMessage(msgObj);
    }
  }
};