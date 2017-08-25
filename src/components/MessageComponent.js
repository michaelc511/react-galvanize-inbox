import React from 'react';

export default function MessageComponent({ selected, message }) {
  //
  let readStatus = 'unread';

  if (message.read === true) {
    readStatus = 'read';
  }

  let selectedStatus = '';
  let checkStatus = '';

  if (selected === true) {
    selectedStatus = 'selected';
    checkStatus = 'checked';
  }
  console.log('selected ' + selected);

  return (
    <div className={`row message ${readStatus} ${selectedStatus} MessageComponent`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={checkStatus} />
          </div>
          <div className="col-xs-2">
            <i className={message.starred ? 'star fa fa-star ' : 'star fa fa-star-o'} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.labels.map(
          (element, i) =>
            <span className="label label-warning" key={i}>
              {element}
            </span>
          //
        )}
        <a href="https://github.com/gSchool/g60-wdi-sf-learn/blob/master/units/React-Fundamentals/exercises/react-galvanize-inbox-README.md">
          {message.subject}
        </a>
      </div>
    </div>
  );
}
