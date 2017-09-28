import deleteMessage from '../../requests/deleteMessage';

export default function deleteMessageProcess(itemId) {
  return (dispatch, getState, env) => {
    //console.log('DELETE PROCESS' + itemId + '11111111111111111111111111');
    // dispatch({ type: 'CREATE_MESSAGE' });
    //console.log(getState().selectedMessagesIds);
    // 1 get the selected messages
    getState().selectedMessageIds.forEach((itemId, index, arr) => {
      //console.log('item id' + itemId + '222222222222222222222222222');
      // added this to remove the deleted item in the 'selectedMessageIds' state
      arr.splice(index, 1);
      // 2 for each of the selected message Ids, delete the record
      return deleteMessage(itemId, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      })
        .then(messages => {
          dispatch({ type: 'DELETE_MESSAGE', itemId: itemId });
          return messages;
        })
        .catch(error => {
          //dispatch({ type: 'CREATE_MESSAGE' });
        });
    });

    // return deleteMessage(itemId, {
    //   databaseId: env.AIRTABLE_DATABASE_ID,
    //   token: env.AIRTABLE_TOKEN
    // })
    //   .then(messages => {
    //     dispatch({ type: 'DELETE_MESSAGE', itemId: itemId });
    //     return messages;
    //   })
    //   .catch(error => {
    //     //dispatch({ type: 'CREATE_MESSAGE' });
    //   });
  }; // end of main return
}
