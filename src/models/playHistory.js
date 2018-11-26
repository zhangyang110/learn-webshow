import { model } from 'models/common'
import modelExtend from 'dva-model-extend'
import { routerRedux } from "dva/router";
import { HistorysApi } from '../services'
import pathToRegexp from 'path-to-regexp'

var loaded = false

export default modelExtend(model, {
    namespace: 'playHistory',
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (!loaded || history.action != 'POP') {
                    const match = pathToRegexp('/playHistory').exec(pathname)
                    if (match != null) {
                        var user = null
                        if (window.globalOpts.platform === 'android') {
                            if (window.button ) {
                                user = button.getUser()
                            }
                        }else if (window.globalOpts.platform === 'other') {

                        }
                        dispatch({
                            type: 'query',
                            payload: {
                                opts: {
                                    query: `app:${globalOpts.app},name:${user}`,
                                    sortby: "updated",
                                    order: "desc",
                                    limit: 1000
                                }
                            }
                        })
                    }
                }
            })
            loaded = true
        },
    },

    state: {
        // currentIndex: 0,
        // pageIndex: 1,
        // totalPage: 2,
        // totalDataCount: 15,
        focusStatus: 102,

    },

    effects: {
        * query({ payload = {} }, { call, put }) {

            const historyData = yield call([HistorysApi, 'historysGet'], payload.opts)
            var pagesData = [];
            var dataList = [];
            var initialData = [];
            var currentIndex = -1;
            var pageIndex = -1;
            if (historyData && historyData.data) {

                historyData.data.map((item, index) => {
                    if (dataList.length == 12) {
                        pagesData.push(dataList);
                        dataList = [];
                    }
                    dataList.push(item)
                    if (index == (historyData.data.length - 1)) {
                        if (dataList.length > 0) {
                            pagesData.push(dataList);
                        }
                    }
                })
                initialData = historyData.data;
                currentIndex = 0;
                pageIndex = 1;
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
            switch (payload.focusStatus) {
                case 101:
                    const macaddress = button.getMac()

                    yield put(routerRedux.push(`/detail/${payload.seriesId}`));
                    break;
                case 102:
                    button.startVideoPlay(payload.seriesId, payload.episode);
                    // yield put(routerRedux.push(`/player/${payload.seriesId}/${payload.episode}`));
                    break;
                case 103:
                    const result = yield call([HistorysApi, 'historysIdDelete'], payload.id)
                    if (result.code == 200) {
                        var pagesData = [];
                        var dataList = [];
                        var newInitialData = [];
                        var currentIndex = -1;
                        var pageIndex = -1;

                        payload.initialData.map((item, index) => {
                            if (item.id != payload.id) {
                                newInitialData.push(item);
                            }
                        })

                        newInitialData.map((item, index) => {
                            if (dataList.length == 12) {
                                pagesData.push(dataList);
                                dataList = [];
                            }
                            dataList.push(item)
                            if (index == (newInitialData.length - 1)) {
                                if (dataList.length > 0) {
                                    pagesData.push(dataList);
                                }
                            }
                        })

                        if (pagesData[(payload.pageIndex - 1)]) {
                            if (pagesData[(payload.pageIndex - 1)].length > payload.currentIndex) {
                                currentIndex = payload.currentIndex;
                            } else {
                                currentIndex = payload.currentIndex - 1;
                            }
                            pageIndex = payload.pageIndex;
                        } else {
                            if (pagesData[(payload.pageIndex - 2)]) {
                                currentIndex = 0;
                                pageIndex = payload.pageIndex - 1;
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
                                focusStatus: 101,
                            },
                        })
                    }
                    break;
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

        deleteSuccess(state, { payload }) {
            var pageData = payload.pagesData[(payload.pageIndex - 1)]
            var newPageData = []
            for (let index = 0; index < pageData.length; index++) {
                const item = pageData[index];
                if (payload.id != item.id) {
                    newPageData.push(item)
                }
            }
            payload.pagesData[(payload.pageIndex - 1)] = newPageData

            return {
                ...state,
                pagesData: payload.pagesData,
                currentIndex: payload.currentIndex,
                pageIndex: payload.pageIndex,
                focusStatus: payload.focusStatus,
                totalDataCount: (payload.totalDataCount - 1),
            }
        },

        change(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },

        changeCurrentHeader(state, { payload }) {
            return {
                ...state,
                currentHeader: payload
            }
        }
    }
})
