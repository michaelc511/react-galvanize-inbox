import createMessage from '../../requests/createMessage';

export default function createMessageProcess(newMessage, showComposeForm) {
  return (dispatch, getState, env) => {
    console.log(getState);
    // dispatch({ type: 'CREATE_MESSAGE' });
    return createMessage(newMessage, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(newMessage => {
        dispatch({ type: 'CREATE_MESSAGE', newMessage: newMessage, showComposeForm: false });
        return newMessage;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
