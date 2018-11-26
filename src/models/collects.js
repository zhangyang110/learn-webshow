import { model } from 'models/common'
import modelExtend from 'dva-model-extend'
import { routerRedux } from 'dva/router'
import pathToRegexp from 'path-to-regexp'
import { CollectsApi } from '../services'

var loaded = false

export default modelExtend(model, {
  namespace: 'collects',
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (!loaded || history.action != 'POP' || history.action != 'BACK') {
          const match = pathToRegexp('/collects')
            .exec(pathname)
          if (match != null) {
            var user = null
            if (window.globalOpts.platform === 'android') {
              if (window.button) {
                user = button.getUser()
              }
            } else if (window.globalOpts.platform === 'other') {

            }

            dispatch({
              type: 'query',
              payload: {
                opts: {
                  query: `app:${globalOpts.app},name:${user}`,
                  limit: 1000,
                },
              },
            })
          }
        }
      })
      loaded = true
    },
  },

  state: {
    //   currentIndex: 0,
    //   pageIndex: 1,
    //   totalPage: 2,
    //   totalDataCount: 15,
      focusStatus: 101,
    // currentIndex : -1,

  },

  effects: {
    * query({ payload = {} }, { call, put, select }) {
      const collectsData = yield call([CollectsApi, 'collectsGet'], payload.opts)

      // let collectsData = {
      //   data: [
      //     {
      //       'app': '少儿',
      //       'cover_url': '20170428/43abf56d-7dec-4b26-90a5-bab5c4a695c2',
      //       'id': 568,
      //       'name': 'lishimin',
      //       'series_id': 2,
      //       'series_name': '小学同步辅导二年级（数学）',
      //     },
      //     {
      //       'app': '少儿',
      //       'cover_url': '20170706/51629f3c-e2d5-492a-9006-adbaa8176627',
      //       'id': 569,
      //       'name': 'lishimin',
      //       'series_id': 367,
      //       'series_name': '雷速登闪电冲线2',
      //     },
      //     {
      //       'app': '教育',
      //       'cover_url': '20170707/253db021-4ed4-429a-b73b-1e15571b3f61',
      //       'id': 570,
      //       'name': 'weitest001',
      //       'series_id': 1,
      //       'series_name': '缇可讲故事 第一部',
      //     },
      //     {
      //       'app': '教育',
      //       'cover_url': '20170428/43abf56d-7dec-4b26-90a5-bab5c4a695c2',
      //       'id': 583,
      //       'name': 'ceshi 11.06',
      //       'series_id': 2,
      //       'series_name': '小学同步辅导二年级（数学）',
      //     },
      //     {
      //       'app': '教育',
      //       'cover_url': '20180625/57a94a87-3f7e-40c6-a585-4c7a46de542f',
      //       'id': 584,
      //       'name': 'ceshi 11.06',
      //       'series_id': 715,
      //       'series_name': '高中化学必修2同步课（人教版）',
      //     },
      //     {
      //       'app': '教育',
      //       'cover_url': '20170428/43abf56d-7dec-4b26-90a5-bab5c4a695c2',
      //       'id': 585,
      //       'name': '9950000000946804',
      //       'series_id': 2,
      //       'series_name': '小学同步辅导二年级（数学）',
      //     },
      //     {
      //       'app': '教育',
      //       'cover_url': '20180625/57a94a87-3f7e-40c6-a585-4c7a46de542f',
      //       'id': 586,
      //       'name': '9950000000946804',
      //       'series_id': 715,
      //       'series_name': '高中化学必修2同步课（人教版）',
      //     },
      //   ],
      // }
      var pagesData = []
      var dataList = []
      var initialData = []
      var currentIndex = -1
      var pageIndex = -1

      if (collectsData && collectsData.data && collectsData.data.length >= 1) {

        collectsData.data.map((item, index) => {
          if (dataList.length == 12) {
            pagesData.push(dataList)
            dataList = []
          }
          dataList.push(item)
          if (index == (collectsData.data.length - 1)) {
            if (dataList.length > 0) {
              pagesData.push(dataList)
            }
          }
        })
        initialData = collectsData.data


        currentIndex = 0
        pageIndex = 1
        console.log(pagesData)

      }

      yield put({
        type: 'querySuccess',
        payload: {
          pagesData: pagesData,
          initialData: initialData,
          totalDataCount: initialData.length,
          currentIndex: currentIndex,
          pageIndex: pageIndex,
          focusStatus: 102,
        },
      })
    },

    * jumpPage({ payload = {} }, { call, put }) {
      console.log(payload)

      switch (payload.focusStatus) {
        case 101:
          yield put(routerRedux.push(`/detail/${payload.seriesId}`))
          break
        case 102:
          button.startVideoPlay(payload.seriesId, payload.episode)
          // yield put(routerRedux.push(`/player/${payload.seriesId}/${payload.episode}`));
          break
        case 103:

          const result = yield call([CollectsApi, 'collectsIdDelete'], payload.id)
          if (result.code == 200) {
            var pagesData = []
            var dataList = []
            var newInitialData = []
            var currentIndex = -1
            var pageIndex = -1


            payload.initialData.map((item, index) => {
              if (item.id != payload.id) {
                newInitialData.push(item)
              }
            })

            newInitialData.map((item, index) => {
              if (dataList.length == 12) {
                pagesData.push(dataList)
                dataList = []
              }
              dataList.push(item)
              if (index == (newInitialData.length - 1)) {
                if (dataList.length > 0) {
                  pagesData.push(dataList)
                }
              }
            })

            if (pagesData[(payload.pageIndex - 1)]) {
              if (pagesData[(payload.pageIndex - 1)].length > payload.currentIndex) {
                currentIndex = payload.currentIndex
              } else {
                currentIndex = payload.currentIndex - 1
              }
              pageIndex = payload.pageIndex
            } else {
              if (pagesData[(payload.pageIndex - 2)]) {
                currentIndex = 0
                pageIndex = payload.pageIndex - 1
              }
            }

            yield put({
              type: 'querySuccess',
              payload: {
                pagesData: pagesData,
                initialData: newInitialData,
                totalDataCount: newInitialData.length,
                currentIndex: currentIndex,
                pageIndex: pageIndex,
                focusStatus: 102,
              },
            })
          }
          break
      }

    },
  },


  reducers: {

    querySuccess(state, { payload }) {

      return {
        ...state,
        pagesData: payload.pagesData,
        currentIndex: payload.currentIndex,
        pageIndex: payload.pageIndex,
        focusStatus: payload.focusStatus,
        totalDataCount: payload.totalDataCount,
        initialData: payload.initialData,
      }
    },


    change(state, { payload }) {
      console.log(payload)
      return {
        ...state,
        ...payload,
      }
    },

    changeCurrentHeader(state, { payload }) {
      console.log(payload)
      return {
        ...state,
        currentHeader: payload,
      }
    },
  },
})
