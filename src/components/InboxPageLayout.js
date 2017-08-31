import React from 'react';

import ToolbarComponent from './ToolbarComponent';
import MessagesComponent from './MessagesComponent';
import ComposeFormComponent from './ComposeFormComponent';

export default function InboxPageLayout(props) {
  //
  //console.log('IndexPageLayout Props: ' + props.checkItem);

  return (
    <div className="InboxPageLayout">
      <ToolbarComponent //
        messages={props.messages} //
        selectedMessageCount={props.selectedMessageCount}
        //
        onOpenComposeForm={props.onOpenComposeForm}
        onSelectAllMessages={props.onSelectAllMessages}
        onDeselectAllMessages={props.onDeselectAllMessages}
        onMarkAsReadSelectedMessages={props.onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={props.onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={props.onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={props.onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={props.onDeleteSelectedMessages}
      />

      <ComposeFormComponent />

      <MessagesComponent //
        messages={props.messages} //
        selectedMessageIds={props.selectedMessageIds}
        checkItem={props.checkItem}
        //
        onSelectMessage={props.onSelectMessage}
        onDeselectMessage={props.onDeselectMessage}
        onStarMessage={props.onStarMessage}
        onUnstarMessage={props.onUnstarMessage}
        onMarkAsReadMessage={props.onMarkAsReadMessage}
      />
    </div>
  );
}
