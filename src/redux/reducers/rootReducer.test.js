import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

var data1 = {
  id: 11,
  subject: 'We need to back up the wireless GB driver!',
  read: true,
  starred: true,
  labels: []
};

describe('rootReducer', () => {
  it('action.type GET_MESSAGES', () => {
    const action = {
      type: 'GET_MESSAGES',
      messages: [...data.messages]
    };

    const currentState = {
      messages: []
    };

    deepFreeze(currentState);

    const nextState = {
      messages: action.messages
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type SELECT_MESSAGE', () => {
    const action = {
      type: 'SELECT_MESSAGE',
      selectedMessageIds: [1],
      selectedMessageCount: 1
    };

    const currentState = {
      selectedMessageIds: [],
      selectedMessageCount: 0
    };

    deepFreeze(currentState);

    const nextState = {
      selectedMessageIds: action.selectedMessageIds,
      selectedMessageCount: action.selectedMessageCount
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test
  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type DESELECT_MESSAGE', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'DESELECT_MESSAGE',
      selectedMessageIds: [1, 2],
      selectedMessageCount: 2
    };

    // current state we have customer and order ifno
    const currentState = {
      selectedMessageIds: [1, 2, 3],
      selectedMessageCount: 3
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      selectedMessageIds: action.selectedMessageIds,
      selectedMessageCount: action.selectedMessageCount
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test
  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type SELECT_ALL_MESSAGES', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'SELECT_ALL_MESSAGES',
      selectedMessageIds: [1, 2, 3],
      selectedMessageCount: 3
    };

    // current state we have customer and order ifno
    const currentState = {
      selectedMessageIds: [],
      selectedMessageCount: 0
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      selectedMessageIds: action.selectedMessageIds,
      selectedMessageCount: action.selectedMessageCount
    };

    ////console.log('test');
    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type DESELECT_ALL_MESSAGES', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'DESELECT_ALL_MESSAGES',
      selectedMessageIds: [],
      selectedMessageCount: 0
    };

    // current state we have customer and order ifno
    const currentState = {
      selectedMessageIds: [1, 2, 3],
      selectedMessageCount: 3
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      selectedMessageIds: action.selectedMessageIds,
      selectedMessageCount: action.selectedMessageCount
    };

    ////console.log('test');

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type MARK_ALL_UNREAD', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'MARK_ALL_UNREAD',
      selectedMessageIds: [],
      selectedMessageCount: 0
    };

    // current state we have customer and order ifno
    const currentState = {
      selectedMessageIds: [1, 2, 3],
      selectedMessageCount: 3
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      selectedMessageIds: action.selectedMessageIds,
      selectedMessageCount: action.selectedMessageCount
    };

    ////console.log('test');

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type COMPOSE', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'COMPOSE',
      showComposeForm: true
    };

    // current state we have customer and order ifno
    const currentState = {
      showComposeForm: false
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      showComposeForm: action.showComposeForm
    };

    ////console.log('test');
    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test
  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type CREATE_MESSAGE', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'CREATE_MESSAGE',
      showComposeForm: true,
      messages: [data1, ...data.messages]
    };

    // current state we have customer and order ifno
    const currentState = {
      showComposeForm: false,
      messages: [...data.messages]
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      showComposeForm: action.showComposeForm,
      messages: [data1, ...action.messages]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type DELETE_MESSAGE', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'DELETE_MESSAGE',
      messages: []
    };

    // current state we have customer and order ifno
    const currentState = {
      messages: [...data.messages]
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      messages: []
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  ///////////////////////////////////////////////////////////////////////////////

  // start of test
  it('action.type UPDATE_MESSAGE', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'UPDATE_MESSAGE',
      messages: [...data.messages]
    };

    // current state we have customer and order ifno
    const currentState = {
      messages: [...data.messages]
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      messages: action.messages
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of
});
