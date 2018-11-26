import {model} from 'models/common'
import modelExtend from 'dva-model-extend'
import {routerRedux} from "dva/router";
import {RecommendsApi, SeriesApi, FreeSeriesApi, PlayHistorysApi, MoviesApi, EventsApi} from 'services'
import Leaderboard from "../routes/dashboard/leaderboard";
// import request from 'request'
// var loaded = false
export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    currentHeader: 'recommend',
    headerBlur: false,
    recommendFocusIndex: -1,
    cartoonFocusIndex: -1,
    ClassifyFocusIndex: -1,
    LeaderBoardFocusIndex: -1,
    recommendList: [],
    time: '',
    totalList: [],
    weekList: [],
    monthlyList: [],
    cartoonHouseData: [],
  },
  subscriptions: {
    setup({dispatch, history}) {
      // history.listen((location) => {
      //   if (location.pathname === '/dashboard' && (!loaded || history.action != 'POP')) {
      //     dispatch({type: 'query'})
      //     //查询播放排行的action
      //     dispatch({type: 'querySeries'})
      //     //获取动画屋的数据
      //     dispatch({type: 'getCartoonHouseData',})
      //   }
      // })
      // loaded = true
      dispatch({type: 'query'})
      //查询播放排行的action
      dispatch({type: 'querySeries'})
      //获取动画屋的数据
      dispatch({type: 'getCartoonHouseData',})
    }
  },
  effects: {
    * query({payload = {}}, {call, put}) {
      let getRecormmendsOpts = {
        query: 'app:少儿,name:推荐',
        sortby: 'created',
        order: 'desc',
        num: 6,
      }
      const data = yield call([RecommendsApi, 'recommendsGet'], getRecormmendsOpts);
      if (data.data) {
        yield put({
          type: 'change',
          payload: {
            recommendList: data.data,
          },
        })
      }
    },
    * jumpPage({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);

      let ClickSearchOpts = {
        eventId: "click_search_entrance",
        mac: mac,
        extraParameter: '',
        channel: channel,
        app: appName,
        versionName: versionName
      }

      yield put(routerRedux.push(`/search`));
      let ClickSearch = yield call([EventsApi, 'eventsPost'], ClickSearchOpts)
    },
    * recommendJumpPage({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let addSeriesTimesOpts = {
        eventId: "click_operation",
        mac: mac,
        extraParameter: JSON.stringify({
          position: payload.position || '',
          name: payload.name || ''
        }),
        channel: channel,
        app: appName,
        versionName: versionName
      }
      if (payload == 'playHistory' || payload == 'collects') {
        addSeriesTimesOpts.extraParameter = '';
        addSeriesTimesOpts.eventId = payload == 'collects' ? 'click_collect_entrance' : 'click_history_entrance';
        yield call([EventsApi, 'eventsPost'], addSeriesTimesOpts);
        yield put(routerRedux.push(`/${payload}`))
        return
      }
      switch (payload.type) {
        case 1:
          yield put(routerRedux.push(`/detail/${payload.object_id}`));
          break;
        case 2:
          yield put(routerRedux.push(`/kinds/1/${payload.object_id}`));
          break;
        case 3:
          yield put(routerRedux.push(`/specialOne/${payload.object_id}`));
          break;
        case 4:
          yield put(routerRedux.push(`/specialTwo/${payload.object_id}`));
          break;
        case 5:
          yield put(routerRedux.push(`/specialOne/${payload.object_id}`));
          break;
        case 6:
          yield put(routerRedux.push(`/limitedFree/${payload.object_id}`));
          return
          break;
      }
      //添加 首页点击 统计
      let addSeriesTimes = yield call([EventsApi, 'eventsPost'], addSeriesTimesOpts)
      console.log(addSeriesTimes);
    },
    * carToonJumpPage({payload = {}}, {call, put}) {
      switch (payload.type) {
        case 1:
          yield put(routerRedux.push(`/detail/${payload.object_id}`));
          break;
        case 2:
          yield put(routerRedux.push(`/kinds/1/${payload.object_id}`));
          break;
        case 3:
          yield put(routerRedux.push(`/specialOne/${payload.object_id}`));
          break;
        case 4:
          yield put(routerRedux.push(`/specialTwo/${payload.object_id}`));
          break;
      }
    },
    * classifyJumpPage({payload = {}}, {call, put}) {
      // yield put(routerRedux.push(`/kinds`))
      yield put(routerRedux.push(`/kinds/1/${payload}`))
    },
    * LeaderboardJumpPage({payload = {}}, {call, put, select}) {
      let focusIndex = payload.LeaderBoardFocusIndex;
      if (focusIndex >= 0 && focusIndex <= 4) {
        yield put(routerRedux.push(`/detail/${payload.totalList[payload.LeaderBoardFocusIndex].series_id}`))
      } else if (focusIndex >= 5 && focusIndex <= 9) {
        const index = focusIndex % 5
        yield put(routerRedux.push(`/detail/${payload.weekList[index].series_id}`))
      } else if (focusIndex >= 10 && focusIndex <= 14) {
        const index = focusIndex % 10
        yield put(routerRedux.push(`/detail/${payload.monthlyList[index].series_id}`))
      }
    },

    * querySeries({payload = {}}, {call, put}) {
      let totalList = [], weekList = [], monthlyList = [];
      const totalListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 1, 5);//总榜单
      const weekListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 2, 5);//周榜单
      const monthlyListData = yield call([PlayHistorysApi, 'playHistorysTopListGet'], "少儿", 3, 5);//月榜单
      if (totalListData.data && weekListData.data && monthlyListData.data) {
        totalList = totalListData.data;
        weekList = weekListData.data;
        monthlyList = monthlyListData.data;
      }
      yield put({
        type: 'change',
        payload: {
          totalList,
          weekList,
          monthlyList,
        },
      })
    },
    * addSeriesCount({payload = {}}, {call, put, select}) {
      let {todaySeriesData} = yield select(_ => _.dashboard)
      yield call([SeriesApi, 'seriesCountPut'], todaySeriesData[payload].series_id)
    },

    * getCartoonHouseData({payload = {}}, {call, put}) {
      let cartoonHouseData;
      let opts = {
        query: 'app:少儿,name:动画屋',
        model: 'accurate',
        num: 9,
      }
      const data = yield call([RecommendsApi, 'recommendsGet'], opts);
      if (data.data) {
        cartoonHouseData = data.data;
        yield put({
          type: 'change',
          payload: {cartoonHouseData},
        })
      }
    },
    * addTimes({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let ary=['首页推荐','首页动画屋','首页分类','首页排行榜'];
      let name;
      switch (payload) {
        case 'recommend':
          name=ary[0]
          break;
        case 'cartoonhouse':
          name=ary[1]
          break;
        case 'classification':
          name=ary[2]
          break;
        case 'leaderboard':
          name=ary[3]
          break;
      }
      let addTimesOpts = {
        eventId: "enter_page",
        mac: mac,
        extraParameter: JSON.stringify({
          page_name: name
        }),
        channel: channel,
        app: appName,
        versionName: versionName
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], addTimesOpts);
      yield put({type: 'changeCurrentHeader', payload: {currentHeader: payload}})
    }


  },
  reducers: {
    change(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    changeCurrentHeader(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
})
