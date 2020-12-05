# Things to look into later

[] Parse.create success cb and error cb will likely need to be customized
[] renderMessage does not currently refer to message input param (messagesView.js)
[]

### MODELS (all currently empty objects)
* messages.js
* rooms.js
* friends.js
​
### VIEWS (note nesting hierarchy)
html page
 * formView
 * roomsView
   * messagesView
     * messageView
​
### VIEWS (nesting hierarchy explicated)
html page
 * formView  (child of html page)
 * roomsView (child of html page)
   * messagesView (child of roomsView)
     * messageView (child of messagesView)
​
### CONTROLLERS
* app.js
* parse.js
