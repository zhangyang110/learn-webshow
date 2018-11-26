import { model } from 'models/common'
import modelExtend from 'dva-model-extend'
import { routerRedux } from 'dva/router'
import { MoviesApi, SeriesApi, HistorysApi } from '../services'
import pathToRegexp from 'path-to-regexp'

export default modelExtend(model, {
  namespace: 'videoplay',
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
      })
    },
  },

  state: {

  },
  effects: {},
  reducers: {
    change(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },

  },
})
