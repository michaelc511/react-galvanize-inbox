import React from 'react';

import ToolbarComponent from './ToolbarComponent';
import MessagesComponent from './MessagesComponent';
import ComposeFormComponent from './ComposeFormComponent';

export default function InboxPage(props) {
  //

  console.log(props);
  return (
    <div className="InboxPage">
      <ToolbarComponent //
        messages={props.messages} //
        selectedMessageCount={props.selectedMessageCount}
      />

      <ComposeFormComponent />
      <MessagesComponent //
        messages={props.messages} //
        selectedMessageIds={props.selectedMessageIds}
      />
    </div>
  );
}
