import { routerRedux } from 'dva/router'
import config from 'config'
// import queryString from "query-string";
import pathToRegexp from 'path-to-regexp'
import { SeriesApi, HistorysApi, EventsApi } from 'services'
import queryString from 'query-string'
const { prefix } = config
var loaded = false
export default {
  namespace: 'webVideo',
  state: {
    seriesId: 0,
    episode: 0,
    episodes: 0,

    title: '',
    showLoad: true,
    isplaying: false,

    nowT: '00:00:00',
    lastT: '00:00:00',
    playedPercent: '0%',
    DownloadedPercent: '0%',

    focusIndex: 0,
    playNow: null,
    selectShow: false,
    moveTimes: 0,
    showMask: true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (!loaded || history.action != 'POP') {
          const match = pathToRegexp('/webVideo/:seriesId/:episode')
            .exec(pathname)
          if (match != null) {
            const seriesId = Number(match[1])
            const episode = Number(match[2])
            if (!history.location.search) {
              dispatch({
                type: 'getData',
                payload: { seriesId, episode },
              })
            }
          }
        }
        if (!location.search) {
          //如果  没有参数  就隐藏select
          dispatch({ type: 'change', payload: { selectShow: false } })
        } else {
          //如果有参数  就展示 select 并且展示 mask
          dispatch({ type: 'change', payload: { selectShow: true, showMask: true } })
        }
      })
      loaded = true
    },
  },
  effects: {
    * getData({ payload = {} }, { call, put }) {
      const { data } = yield call([SeriesApi, 'seriesIdGet'], payload.seriesId)
      if (data) {
        yield put({
          type: 'change',
          payload: {
            playNow: payload.episode - 1,
            seriesId: payload.seriesId,
            episode: payload.episode,
            title: data.name,
            episodes: data.episodes,
            provider: data.provider,
          },
        })
      }
    },
    * changeSource({ payload = {} }, { call, put }) {
      const { data } = yield call([SeriesApi, 'seriesIdGet'], payload.seriesId)
      if (data) {
        yield put({
          type: 'change',
          payload: {
            seriesId: payload.seriesId,
            episode: payload.episode,
            playNow: payload.playNow,
            title: data.name,
            episodes: data.episodes,
            provider: data.provider,
          },
        })
      }
    },
    * showSelect({ payload = {} }, { put }) {
      let { pathname, episode, playNow } = payload
      yield put(routerRedux.push({
        pathname: `${pathname}`,
        search: queryString.stringify({
          playnow: `${playNow + 1}`,
        }),
      }))
      yield put({ type: 'change', payload: { focusIndex: playNow, moveTimes: playNow - 11 > 0 ? playNow - 11 : 0 } })
    },
    * hideSelect({ payload = {} }, { call, put }) {
      yield put(routerRedux.goBack())
    },
    * addHistory({ payload = {} }, { call, put, select }) {
      let { appName } = yield select(_ => _.app)
      let { seriesId, episode, playNow } = yield select(_ => _.webVideo)
      let body = {
        series_id: seriesId,
        name: '虚假name',
        episode,
        app: appName,
      }
      let rrr = yield call([HistorysApi, 'historysPost'], body)
      // console.log(rrr)
    },
    * addPlayC({ payload = {} }, { call, put, select }) {
      let { mac, channel, versionName, appName } = yield select(_ => _.app)
      let { provider, seriesId, title } = yield select(_ => _.webVideo)
      let opts = {
        eventId: 'start_movie',
        mac,
        extraParameter: JSON.stringify({
          provider: provider,
          series_id: seriesId,
          series_name: title,
        }),
        channel,
        app: appName,
        versionName,
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], opts)
      // console.log(addTimes)
    },
    * addEplay({ payload = {} }, { call, put, select }) {
      let { mac, channel, versionName, appName } = yield select(_ => _.app)
      let { provider, seriesId, title } = yield select(_ => _.webVideo)
      let opts = {
        eventId: 'play_movie',
        mac,
        extraParameter: JSON.stringify({
          provider: provider,
          series_id: seriesId,
          series_name: title,
        }),
        channel,
        app: appName,
        versionName,
      }
      let addTimes = yield call([EventsApi, 'eventsPost'], opts)
      // console.log(addTimes)
    },

  },
  reducers: {
    change(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },

}
