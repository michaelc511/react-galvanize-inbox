import React from 'react';

import InboxPageLayout from './InboxPageLayout';

export default function InboxPage(props) {
  //

  //console.log('IndexPage Props: ' + props.checkItem);
  return (
    <InboxPageLayout
      messages={props.messages} //
      selectedMessageCount={props.selectedMessageCount}
      selectedMessageIds={props.selectedMessageIds}
      checkItem={props.checkItem}
      //
      onSelectMessage={props.onSelectMessage}
      onDeselectMessage={props.onDeselectMessage}
      onStarMessage={props.onStarMessage}
      onUnstarMessage={props.onUnstarMessage}
      onMarkAsReadMessage={props.onMarkAsReadMessage}
      onOpenComposeForm={props.onOpenComposeForm}
      onSelectAllMessages={props.onSelectAllMessages}
      onDeselectAllMessages={props.onDeselectAllMessages}
      onMarkAsReadSelectedMessages={props.onMarkAsReadSelectedMessages}
      onMarkAsUnreadSelectedMessages={props.onMarkAsUnreadSelectedMessages}
      onApplyLabelSelectedMessages={props.onApplyLabelSelectedMessages}
      onRemoveLabelSelectedMessages={props.onRemoveLabelSelectedMessages}
      onDeleteSelectedMessages={props.onDeleteSelectedMessages}
    />
  );
}
