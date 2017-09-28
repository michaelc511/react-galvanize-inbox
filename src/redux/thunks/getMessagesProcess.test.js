import getMessagesProcess from './getMessagesProcess';

jest.mock('../../requests/getMessages');

import getMessages from '../../requests/getMessages';

import data from '../../mock-data';

describe('getMessagesProcess', () => {
  it('Calls getMessagesProcess API utility, returns array of messages, and dispatches GET_MESSAGES action', () => {
    const thunk = getMessagesProcess();
    expect(typeof thunk).toBe('function');

    getMessages.mockReturnValueOnce(Promise.resolve([...data.messages]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(messages => {
      expect(getMessages).toBeCalled();
      expect(messages).toEqual([...data.messages]);
      expect(dispatch).toBeCalledWith({ type: 'GET_MESSAGES', messages });
    });
  });
});
