import {routerRedux} from 'dva/router'
import {parse} from 'qs'
import {EnumRoleType} from 'enums'
import {SeriesApi, CategorysApi} from 'services'
import queryString from 'query-string'
import pathToRegexp from "path-to-regexp/index";

var loaded=false
export default {
  namespace: 'commenKinds',
  state: {
    leftBlur: false,
    leftIndex: 0,
    rightIndex: 0,
    leftData: [],
    rightData: [],
    currentPage: 1,
    totalPage: 1,
    moveDownTimes: 0,
  },
  subscriptions: {
    setupHistory({dispatch, history}) {
      history.listen((location) => {
        if(!loaded || history.action != 'POP'){
          const match = pathToRegexp('/kinds/:parent_id/:object_id').exec(location.pathname);
          if (match != null) {
            const parent_id = match[1];
            const object_id = match[2];
            dispatch({type: 'getData', payload: {parent_id, object_id}});
          }
        }
      })
      loaded=true
    },

  },
  effects: {
    * getData({payload = {}}, {call, put, select}) {
      let {parent_id, object_id} = payload;
      let moveDownTimes = 0, leftIndex = 0, categorys = [];
      let getCategorysOpts = {
        query: `parent_id:${parent_id}`,
        model: 'accurate'
      };
      let {data} = yield call([CategorysApi, 'categorysGet'], getCategorysOpts);
      data ? categorys = data : '';
      object_id == -1 ? object_id = categorys[0].id : '';

      leftIndex = categorys.findIndex((item, index, arr) => {
        return item.id == object_id
      })
      if (leftIndex > 6) {
        leftIndex = 6;
        moveDownTimes = categorys.length - 7
      }

      yield put({
        type: 'change',
        payload: {leftData: categorys, moveDownTimes, leftIndex,leftBlur:false}
      })
      yield put({type: 'getRightData', payload: {id: object_id}})
    },
    * getRightData({payload = {}}, {call, put, select}) {
      console.log(4444444444444);
      let getSeriesOpts = {
        query: `category_id:${payload.id }`,
        limit: 500000,
        model: 'accurate'
      };
      let seriesData = yield call([SeriesApi, 'seriesGet'], getSeriesOpts);
      let totalPage = seriesData.data ? Math.ceil(seriesData.data.length / 10) : 1
      let rightData = seriesData.data ? seriesData.data : [];

      yield put({type: 'change', payload: {rightData, totalPage,currentPage:1}})

    },
    * kindJumpPage({payload = {}}, {call, put}) {
      yield put(routerRedux.push(`/detail/${payload}`))
    },
  },
  reducers: {
    change(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
