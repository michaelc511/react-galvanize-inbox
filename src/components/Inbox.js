import React from 'react';

import ToolbarComponent from './components/ToolbarComponent';
import MessagesComponent from './components/MessagesComponent';
import ComposeFormComponent from './components/ComposeFormComponent';

export default function InboxPage(props) {
  //

  console.log(props);
  return (
    <div className="InboxPageLayout">
      <ToolbarComponent //
        messages={props.messages} //
        selectedMessageCount={props.selectedMessageCount}
      />

      <MessagesComponent //
        messages={props.showComposeForm} //
        selectedMessageIds={props.selectedMessageIds}
      />

      <ComposeFormComponent />
    </div>
  );
}
