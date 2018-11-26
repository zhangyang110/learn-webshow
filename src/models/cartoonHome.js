import {routerRedux} from 'dva/router'
import config from 'config'
import queryString from "query-string";
import pathToRegexp from 'path-to-regexp'
import {RecommendsApi, SeriesApi, FreeSeriesApi, PlayHistorysApi, MoviesApi, EventsApi} from 'services'

const {prefix} = config

export default {
  namespace: 'cartoonHome',
  state: {
    time: '',
    headIndex: 0,
    headBlur: false,
    botIndex: -1,
    recommendData: [],

    totalList: [],
    monthlyList: [],
    weekList: [],
    cartoonData: [],
    animateEl: true,
  },

  subscriptions: {
    setup({dispatch, history}) {
      dispatch({type: 'initQuery'})
      dispatch({
        type: 'cartoonHome/addEvent', payload: {
          eventId: 'enter_page',
          extraParameter: {page_name: '首页推荐'},
        }
      })
    }
  },
  effects: {
    * initQuery({payload = {}}, {call, put}) {
      let RecormmendsOpts = {
        query: 'app:少儿,name:推荐',
        sortby: 'created',
        order: 'desc',
        num: 6,
      }
      let cartoonOpts = {
        query: 'app:少儿,name:动画屋',
        model: 'accurate',
        num: 9,
      }
      const recommendData = yield call([RecommendsApi, 'recommendsGet'], RecormmendsOpts);
      const totalListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 1, 5);//总榜单
      const weekListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 2, 5);//周榜单
      const monthlyListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 3, 5);//月榜单
      const cartoonData = yield call([RecommendsApi, 'recommendsGet'], cartoonOpts);

      yield put({
        type: 'change',
        payload: {
          recommendData: recommendData.data,
          totalList: totalListData.data,
          weekList: weekListData.data,
          monthlyList: monthlyListData.data,
          cartoonData: cartoonData.data,
        },
      })

    },
    * jumpPage({payload = {}}, {call, put}) {
      let to = payload.to;
      let query = payload.query ? `/${payload.query}` : '';
      yield put(routerRedux.push(`${to}${query}`));
    },
    * addEvent({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let queryOpts = {
        eventId: `${payload.eventId}`,
        mac: mac,
        extraParameter: payload.extraParameter ? JSON.stringify(payload.extraParameter) : '',
        channel: channel,
        app: appName,
        versionName: versionName
      }
      let data;
      switch (payload.eventId) {
        case 'click_search_entrance':
          data = yield call([EventsApi, 'eventsPost'], queryOpts)
          break;
        case 'click_history_entrance':
          data = yield call([EventsApi, 'eventsPost'], queryOpts);
          break;
        case 'click_collect_entrance':
          data = yield call([EventsApi, 'eventsPost'], queryOpts);
          break;
        case 'click_operation':
          data = yield call([EventsApi, 'eventsPost'], queryOpts);
          break;
        case 'enter_page':
          data = yield call([EventsApi, 'eventsPost'], queryOpts);
          break;
      }
      console.log(data);
    },
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
