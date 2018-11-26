import {routerRedux} from 'dva/router'
import config from 'config'
import queryString from "query-string";
import pathToRegexp from 'path-to-regexp'
import {RecommendsApi, SeriesApi, FreeSeriesApi, PlayHistorysApi, MoviesApi, EventsApi} from 'services'
import login from "./login";

const {prefix} = config
// var loaded = false;

export default {
  namespace: 'eduHome',
  state: {
    topIndex: -1,
    headIndex: 0,
    headBlur: false,
    botIndex: -1,
    dataAry: [],
    time:''
  },

  subscriptions: {
    setup({dispatch, history}) {
      dispatch({type: 'query'})
      dispatch({type: 'addTimes',payload: {page_name:'教育精选频道'}})
    },
  },
  effects: {
    * query({payload = {}}, {call, put, select}) {
      let FeaturedOpts = {
        query: 'app:教育,name:精选',
        sortby: 'created',
        order: 'desc',
        num: 9,
      }
      let InfantOpts = {
        query: 'app:教育,name:婴幼',
        sortby: 'created',
        order: 'desc',
        num: 10,
      }
      let primaryOpts = {
        query: 'app:教育,name:小学',
        sortby: 'created',
        order: 'desc',
        num: 11,
      }
      let midOpts = {
        query: 'app:教育,name:初中',
        sortby: 'created',
        order: 'desc',
        num: 8,
      }
      let highOpts = {
        query: 'app:教育,name:高中',
        sortby: 'created',
        order: 'desc',
        num: 9,
      }
      let interestOpts = {
        query: 'app:教育,name:兴趣',
        sortby: 'created',
        order: 'desc',
        num: 8,
      }
      let ary = [FeaturedOpts, InfantOpts, primaryOpts, midOpts, highOpts, interestOpts];
      let dataAry = [];
      for (let i = 0; i < ary.length; i++) {
        let curOpt = ary[i];
        const {data} = yield call([RecommendsApi, 'recommendsGet'], curOpt);
        if (data) {
          dataAry.push(data)
        }
      }
      if (dataAry.length >= 6) {
        yield put({type: 'change', payload: {dataAry: dataAry}})
      }
    },
    * jumpPage({payload = {}}, {call, put, select}) {
      yield put(routerRedux.push(`${payload}`))
    },
    * otherPage({payload = {}}, {call, put, select}) {
      let type = payload.curData.type;
      let object_id = payload.curData.object_id;
      let parent_id = payload.parent_id;

      let ary = ['/detail', '/kinds', '/specialOne', '/specialTwo', '/specialOne', '/limitedFree'];
      if (!parent_id && type == 2) {
        //精选页面  运营了分类  跳出逻辑  不执行
        return
      } else if (parent_id && type == 2) {
        yield put(routerRedux.push(`/kinds/${parent_id}/${object_id}`));
      } else {
        yield put(routerRedux.push(`${ary[type - 1]}/${object_id}`));
      }
    },
    * addTimes({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let addTimesOpts = {
        eventId: "enter_page",
        mac: mac,
        extraParameter: JSON.stringify({
          page_name: payload.page_name
        }),
        channel: channel,
        app: appName,
        versionName: versionName
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], addTimesOpts);
      // console.log(addTimes);
    },
    * click_education({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app);
      let {headIndex, botIndex} = yield select(_ => _.eduHome);

      let eventIds = [
        'click_education_featured',
        'click_education_infant',
        'click_education_smallschool',
        'click_education_middleschool',
        'click_education_highschool',
        'click_education_interest'
      ]

      let eventId = eventIds[headIndex];
      let addTimesOpts = {
        eventId: eventId,
        extraParameter: JSON.stringify({
          name: payload.name,
          position: payload.position,
        }),
        channel: channel,
        app: appName,
        versionName: versionName,
        mac: mac,
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], addTimesOpts);
    },
    * click_top({payload = {}}, {call, put, select}) {
      let {mac, channel, versionName, appName} = yield select(_ => _.app)
      let addTimesOpts = {
        eventId: payload,
        mac: mac,
        extraParameter:"",
        channel: channel,
        app: appName,
        versionName: versionName
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], addTimesOpts);
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
