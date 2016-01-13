import {
  TEST,
  TEST_SUCCESS,
  TEST_FAIL,
  TEST_ADD
} from 'constants';

export default function user(state={
    navlist: []
}, action) {
  switch (action.type) {

    case TEST:
      return Object.assign({}, [...state.navlist, {
        text: action.text
      }]);
    case TEST_SUCCESS:
      return state;
    case TEST_FAIL:
    return Object.assign({}, [...state.navlist, {
        ex: action.ex
      }]);
    case TEST_ADD:
    return {
      navlist: [
        Object.assign({}, {
          text: action.text
        })
      ]
    }
    default:
      return state;
  }
}
