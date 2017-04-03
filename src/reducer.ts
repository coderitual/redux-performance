import { Record } from 'immutable';

const InitialState = Record({
  title: ''
});

export default (state = new InitialState(), action) => {
  const { type } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};
