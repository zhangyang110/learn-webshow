import {routerRedux} from 'dva/router'
import config from 'config'
import {SeriesApi, SearchRecommendsApi,EventsApi} from 'services'
// import SearchRecommendsApi from "../services/tvapi/src/api/SearchRecommendsApi";

const {prefix} = config
var loaded=false
export default {
  namespace: 'search',
  state: {
    keyWord: '',
    find: 'tuiJian',
    // find: 'notFound'   'tuiJian'  'result',
    focusIndex: 0,
    hotRecommend: -1,
    notFoundFocus: -1,
    resultIndex: -1,
    total: '',
    resultData: [],
    modalVisible: false,
    totalPage: '',
    currentPage: 1,
    lastPosition: '',
    recommendData: []
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        if (location.pathname == '/search'&&(!loaded||history.action!='POP')) {
          dispatch({
            type: 'query',
            payload: {},
          })
        }
      })
      loaded=true
      // dispatch({
      //   type: 'query',
      //   payload: {},
      // })
    },
  },

  effects: {
    * searchKeyWord({payload = {}}, {call, put,select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let clickSearchOpts = {
        eventId: "click_search",
        mac: mac,
        extraParameter: '',
        channel: channel,
        app: appName,
        versionName: versionName
      }
      const opts = {
        query: `first_letter:${payload},channel:${appName}`,
        limit: 5000
      }
      let clickSearch = yield call([EventsApi, 'eventsPost'], clickSearchOpts)

      const data = yield call([SeriesApi, 'seriesGet'], opts)
      if (data.data != null) {
        const total = data.data.length;
        const totalPage = Math.ceil(data.data.length / 8);
        yield put({
          type: 'change',
          payload: {
            find: 'result',
            resultData: data.data,
            totalPage,
            total,
            currentPage:1,
          },
        })
      } else {
        yield put({
          type: 'change',
          payload: {
            find: 'notFound',
          },
        })
      }
    },
    * query({payload = {}}, {call, put,select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let opt = {
        query: `app:${appName}`,
        sortby: 'created',
        order: 'desc',
        limit: 8,
        model: 'accurate'
      }
      const data = yield call([SearchRecommendsApi, 'searchRecommendsGet'], opt)
      if (data.data) {
        yield put({
          type: 'change', payload: {
            recommendData: data.data,
            keyWord: '',
            find: 'tuiJian',
            // find: 'notFound'   'tuiJian'  'result',
            focusIndex: 0,
            hotRecommend: -1,
            notFoundFocus: -1,
            resultIndex: -1,
            total: '',
            resultData: [],
            modalVisible: false,
            totalPage: '',
            currentPage: 1,
            lastPosition: '',
          }
        })
      }

    },
    * jumpPage({payload = {}}, {call, put}) {
      yield put(routerRedux.push(`/detail/${payload}`))
    }
  },
  reducers: {
    change(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
  }

}
