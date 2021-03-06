import React from 'react';

import MessageComponent from './MessageComponent';

export default function MessagesComponent({ messages, selectedMessageIds }) {
  //
  return (
    // start of loop
    <div>
      {messages.map(message => {
        let selected = false;

        // if message.id === selectedIDs then set true
        //  console.log('array: ' + Array.isArray(selectedMessagesIds));
        if (
          selectedMessageIds.find(selectedId => {
            if (selectedId === message.id) {
              return 100;
            } else {
              return 0;
            }
          }) > 0
        ) {
          selected = true;
        }
        return (
          <MessageComponent
            selected={selected} //
            message={message} //
            key={message.id}
          />
        );
      })}
    </div>
  );
}
