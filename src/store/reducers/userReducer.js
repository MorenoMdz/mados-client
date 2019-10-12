const INITIAL_VALUE = {
  name: 'john',
  lastName: 'doe',
};

export default function userReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
