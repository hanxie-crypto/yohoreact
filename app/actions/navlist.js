import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
import md5 from 'spark-md5';
import * as types from 'constants';

polyfill();

let API_ENDPOINT = '/navlist';

// If this is a test, we must use an absolute url
if (__TEST__) {
  API_ENDPOINT = 'http://localhost:9876/navlist';
}
/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
function makeNavlistRequest(method, data) {
  return fetch(API_ENDPOINT, {
    method: method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}


/*
 * @param data
 * @return a simple JS object
 */
function createNavlistRequest(data) {
  return {
    type: types.TEST,
    text: data.text
  };
}

function createNavlistSuccess() {
    return {
        type: types.TEST_SUCCESS
    }
}
function createNavlistFailure(ex) {
      return {
        type: types.TEST_FAIL,
        ex:ex
    }
}
// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createNavlist(text) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (text.trim().length <= 0) return;


    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { navlist } = getState();
    const data = {
      text:text
    };
    dispatch(createNavlistRequest(data));

    return makeNavlistRequest('post', data)
      .then(res => {
        if (res.ok) {
          // We can actually dispatch a CREATE_TOPIC_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          return dispatch(createNavlistSuccess());
        } else {
          throw new Error("出错");
        }
      })
      .catch(ex => {
        return dispatch(createNavlistFailure(ex.message));
      });
  };
}