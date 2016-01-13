import expect from 'expect';
import { applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import md5 from 'spark-md5';
import { polyfill } from 'es6-promise';
// This bit is important. Isomorphic-fetch node will use 
// fetch-npm-browserify if we do not use the node-fetch implementation
// This is the only solution I could come up so that nock could function correctly.
// If you do have a better implementation, please let me know.
import fetch from 'isomorphic-fetch/fetch-npm-node';
import nock from 'nock';
import * as actions from 'actions/navlist';
import * as types from 'constants';  

polyfill();

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe('分析 navlist 的 action', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('测试成功请求一条navlist数据', done => {
    const content = 'A time machine';
    const data = {
      text: content
    };

    const initialState = {
      navlist:[]
    };

    const expectedActions = [
      {
        type: types.TEST,
        text: data.text
      }, {
        type: types.TEST_SUCCESS
      }
    ];

    // This mocks the server response
    // 200 means it was successful
    // port:9876 is karma server's default port
    nock('http://localhost:9876')
      .post('/navlist', data)
      .reply(200, 'OK');

    const store = mockStore(initialState, expectedActions, done);
    store.dispatch(actions.createNavlist(content));
  });

  it('测试服务宕机导致增加失败的情况', done => {
    const content = 'A time machine';

    const data = {
      text: content
    };

    const initialState = {
      navlist:[]
    };

    const expectedActions = [
      {
        type: types.TEST,
        text: data.text
      }, {
        type: types.TEST_FAIL,
        ex: '出错'
      }
    ];

    // This mocks the server response
    // 200 means it was successful
    // port:9876 is karma server's default port
    nock('http://localhost:9876')
      .post('/navlist', data)
      .reply(400);

    const store = mockStore(initialState, expectedActions, done);
    store.dispatch(actions.createNavlist(content));

  });
});
