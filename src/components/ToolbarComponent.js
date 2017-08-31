import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages
}) {
  //

  let status = 'fa fa-square-o'; // none

  if (selectedMessageCount === messages.length) {
    status = 'fa fa-check-square-o'; //all
  } else if (selectedMessageCount !== 0) {
    status = 'fa fa-minus-square-o'; // some
  }

  let disabled = '';

  if (selectedMessageCount === 0) {
    disabled = 'disabled';
  }

  let unread = 0;

  unread = messages.reduce(function(sum, message) {
    //console.log('msg: ' + message.read);
    if (message.read === true) {
      return (sum = sum + 1);
    } else {
      return sum;
    }
  }, 0);

  //console.log('unread ' + unread);
  // FUnctions /////////////////////////////
  function handleOnOpenComposeForm(event) {
    event.preventDefault();
    onOpenComposeForm();
  }
  function handleOnSelectAllMessages(event) {
    //event.preventDefault();
    console.log(selectedMessageCount);
    if (selectedMessageCount === 0) {
      onSelectAllMessages();
    } else {
      onDeselectAllMessages();
    }
  }
  function handleMarkRead(event) {
    event.preventDefault();
    if (selectedMessageCount === 0) {
      onMarkAsReadSelectedMessages();
    } else {
      onMarkAsUnreadSelectedMessages();
    }
  }
  function handleOnMarkAsReadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsReadSelectedMessages();
  }
  ////
  function handleOnMarkAsUnreadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsUnreadSelectedMessages();
  }
  function handleOnApplyLabelSelectedMessages(event) {
    event.preventDefault();
    onApplyLabelSelectedMessages(event.target.value);
  }

  function handleOnRemoveLabelSelectedMessages(event) {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  }

  function onDeleteSelectedMessages(event) {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  }
  ////
  ///////////////////////////////////////////

  return (
    <div className="row toolbar ToolbarComponent">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge" />
          unread messages
        </p>

        <a className="btn btn-danger" onClick={handleOnOpenComposeForm}>
          <i className="fa fa-plus" />
        </a>

        <button className="btn btn-default" onClick={handleOnSelectAllMessages}>
          <i className={status} />
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleOnMarkAsReadSelectedMessages}>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabled} onClick={handleOnMarkAsUnreadSelectedMessages}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={handleOnApplyLabelSelectedMessages} disabled={disabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select onChange={handleOnRemoveLabelSelectedMessages} className="form-control label-select" disabled={disabled}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button onClick={onDeleteSelectedMessages} className="btn btn-default" disabled={disabled}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
}
