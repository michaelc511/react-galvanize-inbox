import React, { Component } from 'react';
import './index.css';

import InboxPage from './components/InboxPage';
//
import getMessages from './api/getMessages';
import updateMessage from './api/updateMessage';
import deleteMessage from './api/deleteMessage';
import createMessage from './api/createMessage';

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
  //// MESSAGES FUNCTIONS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////////////

  // 1D load the messages after 'componentDidMount()' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  componentDidMount() {
    getMessages() //
      .then(messages => {
        //  console.log(messages);
        this.setState({
          // array of Objects
          messages
        });
      });
  }

  // 2D _onSelectMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

  // 3D _onDeselectMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onDeselectMessage = itemId => {
    //console.log('onDeselectMessage');
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

  // 4D _onStarMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onStarMessage = itemId => {
    // 1. call updateMessage
    updateMessage(itemId, {
      starred: true
    })
      .then(updatedMessage => {
        // 1. set the state
        console.log('onStar');
        console.log(updatedMessage);
        this.setState(prevState => {
          let newMessages = prevState.messages;
          // get a new array
          newMessages = newMessages.map(
            message =>
              message.id === itemId //
                ? updatedMessage //(message.starred = true) //
                : message
          );

          //console.log('new Messages');
          //console.log(newMessages);
          // 4. return the object with the stte variable to setState
          return { messages: newMessages };
        }); // end of setState
      })
      .catch(error => {
        console.log('ERROR ' + error.message);
      });
  };

  // 5D _onUnstarMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onUnstarMessage = itemId => {
    // 1. call updateMessage
    updateMessage(itemId, {
      starred: false
    })
      .then(updatedMessage => {
        // 1. set the state
        //console.log('1');
        this.setState(prevState => {
          let newMessages = prevState.messages;
          // get a new array
          newMessages = newMessages.map(
            message =>
              message.id === itemId //
                ? updatedMessage //(message.starred = false) //
                : message
          );

          // console.log('new Messages');
          // console.log(newMessages);
          // 4. return the object with the stte variable to setState
          return { messages: newMessages };
        }); // end of setState
      })
      .catch(error => {});
  };

  // 6D _onMarkAsReadMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onMarkAsReadMessage = itemId => {
    //  console.log('READ');
    // 1. call updateMessage
    updateMessage(itemId, {
      read: true
    })
      .then(updatedMessage => {
        // 1. set the state
        //  console.log('1');
        this.setState(prevState => {
          let newMessages = prevState.messages;
          // get a new array
          newMessages = newMessages.map(
            message =>
              message.id === itemId //
                ? updatedMessage //(message.read = true) //
                : message
          );

          // console.log('new Messages');
          // console.log(newMessages);
          // 4. return the object with the stte variable to setState
          return { messages: newMessages };
        }); // end of setState
      })
      .catch(error => {});
  };

  // TOOLBAR FUNCTIONS /////
  // 7D _onOpenComposeForm >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onOpenComposeForm = () => {
    // console.log('onOpenComposeForm');
    //
    // console.log(this.state.showComposeForm);

    this.setState({
      showComposeForm: true
    });

    //Ask why this is false after setting true. works fine though ?????????????
    console.log(this.state.showComposeForm);
  };

  // 8D _onSelectAllMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onSelectAllMessages = () => {
    //console.log('_onSelectAllMessages');

    /*
    1) map the arrry to selectedMessageIds
    2) Add all to selectedMessageIds
    */
    this.setState(prevState => {
      let newArr = prevState.messages.map(message => message.id);
      // console.log('New Arr');
      // console.log(newArr);
      return { selectedMessageIds: newArr, selectedMessageCount: newArr.length };
    }); // end of setState
  };

  // 9D _onDeselectAllMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onDeselectAllMessages = () => {
    //console.log('_onDeselectAllMessages');
    this.setState({
      selectedMessageIds: [],
      selectedMessageCount: 0
    }); // end of setState
  };

  // 10D _onMarkAsReadSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onMarkAsReadSelectedMessages = () => {
    //console.log('_onMarkAsReadSelectedMessages');
    // 1. do iteration of all messages
    // 2. update in 'updateMessage' for each iteration
    // 3. ...

    //console.log(this.state.messages);
    this.state.messages.forEach(message => {
      //console.log(message.id);
      let itemId = message.id;
      // 2 do the updateMessage
      // 3 setState for each Message
      updateMessage(itemId, {
        read: true
      })
        .then(updatedMessage => {
          // 3. set the state
          //  console.log('1');
          this.setState(prevState => {
            let newMessages = prevState.messages;
            // get a new array
            newMessages = newMessages.map(
              message =>
                message.id === itemId //
                  ? updatedMessage // (message.read = true) //
                  : message
            );

            // 4. return the object with the stte variable to setState
            return { messages: newMessages };
          }); // end of setState
        })
        .catch(error => {});
    }); // end of forEach
  };

  // 11D _onMarkAsUnreadSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onMarkAsUnreadSelectedMessages = () => {
    //  console.log('_onMarkAsUnreadSelectedMessagesi');
    //console.log(this.state.messages);
    this.state.messages.forEach(message => {
      //console.log(message.id);
      let itemId = message.id;
      // 2 do the updateMessage
      // 3 setState for each Message
      updateMessage(itemId, {
        read: false
      })
        .then(updatedMessage => {
          // 3. set the state
          //  console.log('1');
          this.setState(prevState => {
            let newMessages = prevState.messages;
            // get a new array
            newMessages = newMessages.map(
              message =>
                message.id === itemId //
                  ? updatedMessage //(message.read = false) //
                  : message
            );

            // 4. return the object with the stte variable to setState
            return { messages: newMessages };
          }); // end of setState
        })
        .catch(error => {});
    }); // end of forEach
  };

  // 12D _onApplyLabelSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onApplyLabelSelectedMessages = label => {
    //console.log('_onApplyLabelSelectedMessages');
    //console.log(label);
    this.state.messages.forEach(message => {
      //console.log(message.id);
      let itemId = message.id;
      let labels = message.labels;
      if (!labels.includes(label)) {
        labels.push(label);
      }

      // 2 do the updateMessage
      // 3 setState for each Message
      updateMessage(itemId, {
        labels: labels.toString()
      })
        .then(updatedMessage => {
          // 3. set the state
          //  console.log('1');
          this.setState(prevState => {
            let newMessages = prevState.messages;
            // get a new array
            newMessages = newMessages.map(
              message =>
                message.id === itemId //
                  ? updatedMessage //(message.labels = labels) //
                  : message
            );

            // 4. return the object with the stte variable to setState
            return { messages: newMessages };
          }); // end of setState
        })
        .catch(error => {});
    }); // end of forEach
  };

  // 13D _onRemoveLabelSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onRemoveLabelSelectedMessages = label => {
    //console.log('onRemoveLabelSelectedMessages');
    this.state.messages.forEach(message => {
      //console.log(message.id);
      let itemId = message.id;
      let labels = message.labels;
      // if (!labels.includes(label)) {
      //   labels.push(label);
      // }

      if (labels.includes(label)) {
        labels.splice(labels.indexOf(label), 1);
      }

      // 2 do the updateMessage
      // 3 setState for each Message
      updateMessage(itemId, {
        labels: labels.toString()
      })
        .then(updatedMessage => {
          // 3. set the state
          //  console.log('1');
          this.setState(prevState => {
            let newMessages = prevState.messages;
            // get a new array
            newMessages = newMessages.map(
              message =>
                message.id === itemId //
                  ? updatedMessage //(message.labels = labels) //
                  : message
            );

            // 4. return the object with the stte variable to setState
            return { messages: newMessages };
          }); // end of setState
        })
        .catch(error => {});
    }); // end of forEach
  };

  // 14D _onDeleteSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onDeleteSelectedMessages = () => {
    //console.log('_onDeleteSelectedMessages');
    this.state.messages.forEach(message => {
      //console.log(message.id);
      let itemId = message.id;
      //console.log('item id: ' + itemId);

      deleteMessage(itemId)
        .then(data => {
          //console.log(data.id);
          this.setState(prevState => {
            prevState.messages.forEach((message, index) => {
              //message.read = false;
              // check the label array
              // if not in then push
              if (message.id === data.id) {
                prevState.messages.splice(index, 1);
              }
              return message;
            });
          }); // end of setState
        })
        .catch(error => {});
    }); // end of forEach
  };

  // 15 _onSubmit >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onSubmit = ({ subject, body }) => {
    //console.log('onSubmit 1');

    // 1 set the object
    // 2 pass it to createMessage()
    // 3 setState
    let newMessage = {
      subject: subject,
      body: body,
      read: false,
      starred: false,
      labels: ''
    };
    createMessage(newMessage)
      .then(newMessage => {
        // console.log('createMessage ');
        // console.log(newMessage);
        //return data;

        this.setState(prevState => {
          let newMessages = prevState.messages;

          newMessages.unshift(newMessage);
          return {
            messages: newMessages,
            showComposeForm: false
          };
        }); // end of setState
      })
      .catch(error => {});
  };

  // 16D _onCancel >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _onCancel = () => {
    //console.log('onCancel ');
    this.setState({
      showComposeForm: false
    });
    console.log(this.state.showComposeForm);
  };

  // // 17 _checkItem >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  _checkItem(itemId, type) {
    console.log('type: ' + type);
  }
  /////////
} // end of App Component
