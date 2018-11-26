/* global window */
/* global document */
/* global location */
import { routerRedux } from 'dva/router'
import { parse } from 'qs'
import config from 'config'
import { EnumRoleType } from 'enums'
import { AuthApi, Login, ProfileApi, ApiClient, FreeSeriesApi, MoviesApi, EventsApi } from 'services'
import queryString from 'query-string'
import pathToRegexp from 'path-to-regexp/index'

const { prefix } = config
export default {
  namespace: 'app',
  state: {
    // locationPathname: '',
    // locationQuery: {},

    channel: globalOpts.channel,
    versionName: window.button ? button.getVersionName() : globalOpts.version,
    appName: globalOpts.app,
    mac: window.button ? button.getMac() : 'macString',
    userName: window.button ? button.getUser() : null,
    platform: globalOpts.platform,
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        dispatch({ type: 'addGlobalTimes', payload: location.pathname })
      })
    },
  },
  effects: {
    * addGlobalTimes({ payload }, { call, put, select }) {
      let routes = ['search', 'kinds', 'detail', 'specialOne', 'specialTwo', 'specialOne', 'limitedFree', 'collects', 'playHistory']
      let page_names = ['搜索页面', '全部分类页', '剧集详情页', '免费专区模版1页面', '免费专区模版2页面', '专题模版1页面', '专题模版2页面', '收藏页面', '播放历史页面']
      ///search  /kinds  /detail/71  /specialOne/19   /specialTwo/2
      let { mac, channel, versionName, appName } = yield select(_ => _.app)
      let index = routes.indexOf(payload.split('/')[1])
      if (index != -1) {
        let page_name = page_names[index]
        let opts = {
          eventId: 'enter_page',
          extraParameter: JSON.stringify({
            page_name: page_name || '',
          }),
          app: appName,
          mac,
          channel,
          versionName,
        }
        let addTimes = yield call([EventsApi, 'eventsPost'], opts)
      }

    },

  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
