import React, { Component } from 'react';
import './index.css';

import InboxPage from './components/InboxPage';
//
import getMessages from './requests/getMessages';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <InboxPage
        messages={this.state.messages} //
        selectedMessageIds={this.state.selectedMessageIds} //
        selectedMessageCount={this.state.selectedMessageCount}
        showComposeForm={this.state.showComposeForm} //
        // MESSAGES METHODS
        onSelectMessage={this._onSelectMessage}
        onDeselectMessage={this._onDeselectMessage}
        onStarMessage={this._onStarMessage}
        onUnstarMessage={this._onUnstarMessage}
        onMarkAsReadMessage={this._onMarkAsReadMessage}
        //
        // TOOLBAR METHODS
        checkItem={this._checkItem} //?
        onOpenComposeForm={this._onOpenComposeForm} // DOne
        onSelectAllMessages={this._onSelectAllMessages} // Done
        onDeselectAllMessages={this._onDeselectAllMessages} //Done
        onMarkAsReadSelectedMessages={this._onMarkAsReadSelectedMessages} // Done
        onMarkAsUnreadSelectedMessages={this._onMarkAsUnreadSelectedMessages} // Done
        onApplyLabelSelectedMessages={this._onApplyLabelSelectedMessages} // DONE
        onRemoveLabelSelectedMessages={this._onRemoveLabelSelectedMessages} // DONE
        onDeleteSelectedMessages={this._onDeleteSelectedMessages} // DONE
        // COMPOSE EMAIL
        onSubmit={this._onSubmit}
        onCancel={this._onCancel}
      />
    );
  } // end of render

  state = {
    selectedMessageIds: [],

    selectedMessageCount: 0, //this.state.selectedMessageIds.length,

    showComposeForm: false,
    messages: []
  }; // end of state

  //
  //
  //// MESSAGES FUNCTIONS  ///////////////////////////////

  // 1 load the messages after 'componentDidMount()'
  componentDidMount() {
    getMessages() //
      .then(messages => {
        console.log(messages);
        this.setState({
          // array of Objects
          messages
        });
        // console.log('app.js');
        // console.log(this.state.messages);
      });
  }

  _onSelectMessage = itemId => {
    // console.log('_onSelectMessage');

    // 1. set the state
    this.setState(prevState => {
      //console.log('ITEM' + itemId);
      // 2. in function, get the prevState
      const newSelectedMessageIds = prevState.selectedMessageIds;
      // 3. push variable with itemId
      newSelectedMessageIds.push(itemId);
      // 4. return the object with the stte variable to setState
      return { selectedMessagesIds: newSelectedMessageIds };
    });
    // console.log('setting the selectedMessageIds');
    // console.log(this.state.selectedMessageIds);
  };

  _onDeselectMessage = itemId => {
    console.log('onDeselectMessage');
    let found = this.state.selectedMessageIds.indexOf(itemId);

    // 1. set the state
    this.setState(prevState => {
      //console.log('ITEM' + itemId);
      // 2. in function, get the prevState
      const newSelectedMessageIds = prevState.selectedMessageIds;
      // 3. push variable with itemId
      newSelectedMessageIds.splice(found, 1);
      // 4. return the object with the stte variable to setState
      return { selectedMessagesIds: newSelectedMessageIds };
    });
  };

  _onStarMessage = itemId => {
    //

    //console.log(this.state.messages);
    // callback function

    // 1. set the state
    this.setState(prevState => {
      //console.log('ITEM' + itemId);
      // 2. in function, get the prevState
      // 1 verify each id with the message id
      let newMessages = prevState.messages;

      let messageId = prevState.messages.find(message => {
        if (message.id === itemId) {
          return message.id;
        }
        return undefined;
      }); // end of find()

      // 3. change the star to 'true' variable with itemId
      if (messageId !== undefined) {
        // console.log('found ' + messageId);
        // console.log(messageId);
        //  newMessages.starred = true;
        /* set the specifice message to true */
        newMessages.map(
          (
            message //
          ) =>
            message.id === itemId //
              ? (message.starred = true) //
              : message
        );
      } else {
        console.log('not found ' + messageId);
      }

      console.log('new Messages');
      console.log(newMessages);
      // 4. return the object with the stte variable to setState
      return { messages: newMessages };
    }); // end of setState
  };

  _onUnstarMessage = itemId => {
    // 1. set the state
    this.setState(prevState => {
      //console.log('ITEM' + itemId);
      // 2. in function, get the prevState
      // 1 verify each id with the message id
      let newMessages = prevState.messages;

      let messageId = prevState.messages.find(message => {
        if (message.id === itemId) {
          return message.id;
        }
        return undefined;
      }); // end of find()

      // 3. change the star to 'true' variable with itemId
      if (messageId !== undefined) {
        // console.log('found ' + messageId);
        // console.log(messageId);
        //  newMessages.starred = true;
        /* set the specifice message to true */
        newMessages.map(
          (
            message //
          ) =>
            message.id === itemId //
              ? (message.starred = false) //
              : message
        );
      } else {
        console.log('not found ' + messageId);
      }

      console.log('new Messages');
      console.log(newMessages);
      // 4. return the object with the stte variable to setState
      return { messages: newMessages };
    }); // end of setState
  };

  _onMarkAsReadMessage = itemId => {
    console.log('READ');
    // 1. set the state
    this.setState(prevState => {
      //console.log('ITEM' + itemId);
      // 2. in function, get the prevState
      // 1 verify each id with the message id
      let newMessages = prevState.messages;

      let messageId = prevState.messages.find(message => {
        if (message.id === itemId) {
          return message.id;
        }
        return undefined;
      }); // end of find()

      // 3. change the star to 'true' variable with itemId
      if (messageId !== undefined) {
        // console.log('found ' + messageId);
        // console.log(messageId);
        //newMessages.read = true;
        /* set the specifice message to true */
        newMessages.map(
          (
            message //
          ) =>
            message.id === itemId //
              ? (message.read = true) //
              : message
        );
      } else {
        console.log('not found ' + messageId);
      }

      console.log('new Messages');
      console.log(newMessages);
      // 4. return the object with the stte variable to setState
      return { messages: newMessages };
    }); // end of setState
  };

  // TOOLBAR FUNCTIONS ///////////////////////////////////////
  _onOpenComposeForm = () => {
    console.log('onOpenComposeForm');

    console.log(this.state.showComposeForm);

    this.setState({
      showComposeForm: true
    });

    // Ask why this is false after setting true. works fine though
    // console.log(this.state.showComposeForm);
  };

  _onSelectAllMessages = () => {
    console.log('_onSelectAllMessages');

    /*
    1) map the arrry to selectedMessageIds
    2) Add all to selectedMessageIds
    */
    this.setState(prevState => {
      let newArr = prevState.messages.map(message => message.id);
      console.log('New Arr');
      console.log(newArr);
      return { selectedMessageIds: newArr, selectedMessageCount: newArr.length };
    }); // end of setState
  };

  _onDeselectAllMessages = () => {
    console.log('_onDeselectAllMessages');
    this.setState({
      selectedMessageIds: [],
      selectedMessageCount: 0
    }); // end of setState
  };

  _onMarkAsReadSelectedMessages = () => {
    console.log('_onMarkAsReadSelectedMessages');

    this.setState(prevState => {
      let newMessages = prevState.messages;

      newMessages.map(message => {
        message.read = true;
        return message;
      });
      return { messages: newMessages };
    });
  };

  _onMarkAsUnreadSelectedMessages = () => {
    console.log('_onMarkAsUnreadSelectedMessagesi');

    this.setState(prevState => {
      let newMessages = prevState.messages;

      newMessages.map(message => {
        message.read = false;
        return message;
      });
      return { messages: newMessages };
    });
  };

  _onApplyLabelSelectedMessages = label => {
    console.log('_onApplyLabelSelectedMessages');
    console.log(label);

    this.setState(prevState => {
      let newMessages = prevState.messages;

      this.state.selectedMessageIds.forEach(function(messageId) {
        // add label only if it's selected
        newMessages.forEach(message => {
          //message.read = false;
          // check the label array
          // if not in then push
          if (message.id === messageId) {
            if (!message.labels.includes(label)) {
              message.labels.push(label);
            }
          }
          return message;
        });
      });

      return { messages: newMessages };
    });

    // selectedMessageIds.forEach(function(messageId) {
    //   messages.forEach(function(message) {
    //     if (message.id === messageId) {
    //       if (!message.labels.includes(label)) {
    //         message.labels.push(label);
    //       }
    //     }
    //   });
    //   //messages[element].labels.push(label);
    // });
  };

  _onRemoveLabelSelectedMessages = label => {
    console.log('onRemoveLabelSelectedMessages');

    this.setState(prevState => {
      let newMessages = prevState.messages;

      this.state.selectedMessageIds.forEach(function(messageId) {
        // add label only if it's selected
        newMessages.forEach(message => {
          //message.read = false;
          // check the label array
          // if not in then push
          if (message.id === messageId) {
            if (message.labels.includes(label)) {
              message.labels.splice(message.labels.indexOf(label), 1);
            }
          }
          return message;
        });
      });

      return { messages: newMessages };
    });

    // selectedMessageIds.forEach(function(messageId) {
    //   messages.forEach(function(message) {
    //     if (message.id === messageId) {
    //       if (message.labels.includes(label)) {
    //         message.labels.splice(message.labels.indexOf(label), 1);
    //       }
    //     }
    //   });
    // });
  };

  _onDeleteSelectedMessages = () => {
    console.log('_onDeleteSelectedMessages');

    this.setState(prevState => {
      let newMessages = prevState.messages;

      this.state.selectedMessageIds.forEach(function(messageId) {
        // add label only if it's selected
        newMessages.forEach((message, index) => {
          //message.read = false;
          // check the label array
          // if not in then push
          if (message.id === messageId) {
            newMessages.splice(index, 1);
          }
          return message;
        });
      });

      return { messages: newMessages };
    });

    // selectedMessageIds.forEach(function(messageId) {
    //
    //
    //   messages.forEach(function(message, index) {
    //     if (message.id === messageId) {
    //       console.log(index);
    //       messages.splice(index, 1);
    //       return index;
    //     }
    //   });
    // });
  };

  _onSubmit = ({ subject, body }) => {
    console.log('onSubmit 1');

    //
    let rand = Math.floor(Math.random() * 100000000000000);
    // console.log('RAND: ' + rand);
    // console.log(String.toString(rand).length);

    this.setState(prevState => {
      let newMessages = prevState.messages;

      newMessages.unshift({
        id: 'rec' + rand,
        subject: subject,
        read: false,
        starred: false,
        labels: []
      });
      return { messages: newMessages };
    });
    // console.log('sub ' + subject);
    // console.log('body' + body);
    //
    // add to the messages
    // console.log(messages[messages.length - 1].id);
    // let nextID = messages[messages.length - 1].id + 1;
    // messages.unshift({
    //   id: nextID,
    //   subject: subject,
    //   read: false,
    //   starred: false,
    //   labels: []
    // });
    // showComposeForm = false;
  };

  _onCancel = () => {
    console.log('onCancel ');
    this.setState({
      showComposeForm: false
    });
  };

  _checkItem(itemId, type) {
    console.log('type: ' + type);
  }
  ///////////////////////////////////////////
} // end of App Component

// function render() {
//   ReactDOM.render(<div>hi</div>
//     <InboxPage
//       messages={messages} //
//       selectedMessageIds={selectedMessageIds} //
//       selectedMessageCount={selectedMessageCount}
//       showComposeForm={showComposeForm} //
//       checkItem={checkItem}
//       //
//       onSelectMessage={onSelectMessage}
//       onDeselectMessage={onDeselectMessage}
//       //
//       onStarMessage={onStarMessage}
//       onUnstarMessage={onUnstarMessage}
//       //
//       onMarkAsReadMessage={onMarkAsReadMessage}
//       //
//       onOpenComposeForm={onOpenComposeForm}
//       onSelectAllMessages={onSelectAllMessages}
//       onDeselectAllMessages={onDeselectAllMessages}
//       onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
//       onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
//       onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
//       onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
//       onDeleteSelectedMessages={onDeleteSelectedMessages}
//       //
//       onSubmit={onSubmit}
//       onCancel={onCancel}
//     />,
//     document.getElementById('root')
//   );
// }
//
//
