export default function getMessages() {
  // gets the Response object and chain it
  // get response.json() to parse it
  // return fetch('/data/messages.json') //
  //   .then(response => response.json());

  return fetch('https://api.airtable.com/v0/appnspObUvyNgSocu/messages?maxRecords=8&view=Grid%20view', {
    headers: {
      Authorization: 'Bearer keyG8wwLRrkdRDmjp'
    }
  })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return data.records.map(record => ({
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      }));
    }) // end of then
    .then(messages => {
      //console.log('FINAL');
      //console.log(messages);
      return messages;
    });
} // end of function
