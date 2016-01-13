import expect from 'expect';
import md5 from 'spark-md5';
import reducer from 'reducers/navlist';
import * as types from 'constants';

describe('Navlist reducer', () => {
  it('应当返回初始state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        navlist: [],
      }
    );
  });

  it('往空的状态中增加一条数据', () => {
    const content = 'A time machine';
    expect(
      reducer(undefined, {
        type: types.TEST_ADD,
        text: content
      })
    ).toEqual({
      navlist: [
        {
          text: content
        }
      ]
    });
  });

});

