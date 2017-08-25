import React from 'react';

export default function ToolbarComponent({ messages, selectedMessageCount }) {
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

  return (
    <div className="row toolbar ToolbarComponent">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unread}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus" />
        </a>

        <button className="btn btn-default">
          <i className={status} />
        </button>

        <button className="btn btn-default" disabled={disabled}>
          Mark As Read
        </button>

        <button className="btn btn-default" disabled={disabled}>
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled={disabled}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled={disabled}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled={disabled}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
}
