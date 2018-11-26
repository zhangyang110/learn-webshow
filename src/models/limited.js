import {routerRedux} from 'dva/router'
import config from 'config'
import queryString from "query-string";
import pathToRegexp from 'path-to-regexp'
import {SubjectsApi, SubjectSeriesApi} from 'services'

const {prefix} = config
var loaded = false
export default {
  namespace: 'limited',
  state: {
    background_url: '',
    pagesData: [],
    objectId: -1,
    limitedFocus: 0,
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        if (!loaded || history.action != 'POP') {
          const match = pathToRegexp('/limitedFree/:id').exec(pathname)
          if (match != null) {
            const objectId = match[1];
            dispatch({
              type: 'getData',
              payload: {id: objectId}
            })
          }
        }
      })
      loaded = true
    }
  },
  effects: {
    * getData({payload = {}}, {call, put}) {
      const subjectData = yield call([SubjectsApi, 'subjectsIdGet'], payload.id)
      if (subjectData) {
        const payload2 = {
          query: `subject_id:${ payload.id}`,
          model: "accurate"
        }
        const subjecSeriestData = yield call([SubjectSeriesApi, 'subjectSeriesGet'], payload2)
        if (subjecSeriestData) {
          yield put({
            type: 'change',
            payload: {
              background_url: subjectData.data.background_url,
              pagesData: subjecSeriestData.data,
            },
          })
        }
      }
    },
    * toDetail({payload = {}}, {call, put}) {
      yield put(routerRedux.push(`/detail/${payload.series_id}`));
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
