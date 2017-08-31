import React from 'react';

import ToolbarComponent from './components/ToolbarComponent';
import MessagesComponent from './components/MessagesComponent';
import ComposeFormComponent from './components/ComposeFormComponent';

export default function InboxPage(props) {
  //

  console.log('Props' + props);
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

      {props.showComposeForm && <ComposeFormComponent onSubmit={props.onSubmit} onCancel={props.onCancel} />}
    </div>
  );
}
