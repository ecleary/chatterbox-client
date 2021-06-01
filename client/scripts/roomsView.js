var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    RoomsView.$select.append(`<option value="${roomName.toLowerCase()}">${roomName}</option>`);
  }

};
