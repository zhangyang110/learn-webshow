import { routerRedux } from 'dva/router'
import config from 'config'
import queryString from 'query-string'
import pathToRegexp from 'path-to-regexp/index'
import { SeriesApi, MoviesApi, CollectsApi, EventsApi } from 'services'

const { prefix } = config
var loaded = false
export default {
  namespace: 'detail',
  state: {
    seriesData: [],
    topFocus: 0,
    movieData: [],
    midFocus: -1,
    currentPage: 1,
    botForbid: true,
    isCollect: false,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (!loaded || history.action != 'POP') {
          const match = pathToRegexp('/detail/:id')
            .exec(location.pathname)
          if (match != null) {
            const id = match[1]
            dispatch({ type: 'getData', payload: { id: id } })
            dispatch({
              type: 'change', payload: {
                topFocus: 0,
                midFocus: -1,
                currentPage: 1,
                botForbid: true,
              },
            })
          }
        }
      })
      loaded = true
    },
  },
  effects: {
    * getData({ payload = {} }, { call, put, select }) {
      let { mac, channel, versionName, appName, userName } = yield select(_ => _.app)
      const data = yield call([SeriesApi, 'seriesIdGet'], payload.id, { name: userName })
      if (data.data) {
        const opts = {
          query: `series_id:${data.data.series_id}`,
          sortby: 'episode',
          order: 'asc',
          limit: 5000000,
        }
        let addSeriesTimesOpts = {
          eventId: 'enter_series_detail',
          mac: mac,
          extraParameter: JSON.stringify({
            series_id: data.data.id,
            series_name: data.data.name,
          }),
          channel: channel,
          app: appName,
          versionName: versionName,
        }
        const data2 = yield call([MoviesApi, 'moviesGet'], opts)
        //添加 详情统计
        let addSeriesTimes = yield call([EventsApi, 'eventsPost'], addSeriesTimesOpts)
        if (data2.data) {
          yield put({
            type: 'change',
            payload: { seriesData: data.data, movieData: data2.data, isCollect: data.data.is_collect },
          })

        }
      }
    },
    * toPlayer({ payload = {} }, { call, put }) {
      yield put(routerRedux.push(`/webVideo/${payload.seriesId}/${payload.episode}`))
    },
    * addCollect({ payload = {} }, { call, put, select }) {
      let { mac, channel, versionName, appName, userName } = yield select(_ => _.app)
      console.log('sdfssfsfd+++++', userName)
      const body = { series_id: payload.seriesId, name: userName, app: appName }
      const data = yield call([CollectsApi, 'collectsPost'], body)
      yield put({ type: 'getData', payload: { id: payload.seriesId, name: '' } })
    },
    * delCollect({ payload = {} }, { call, put, select }) {
      let { mac, channel, versionName, appName, userName } = yield select(_ => _.app)
      const body = { seriesId: payload.seriesId, name: userName, app: appName }
      const data = yield call([CollectsApi, 'collectsDelete'], body)
      yield put({ type: 'getData', payload: { id: payload.seriesId, name: '' } })
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
