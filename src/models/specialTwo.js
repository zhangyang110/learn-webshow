import { model } from 'models/common'
import modelExtend from 'dva-model-extend'
import { SubjectsApi, SubjectSeriesApi } from '../services'
import { routerRedux } from "dva/router";
import pathToRegexp from 'path-to-regexp'

var loaded=false

export default modelExtend(model, {
    namespace: 'specialTwo',
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if(!loaded||history.action!='POP'){
                const match = pathToRegexp('/specialTwo/:id').exec(pathname)
                if (match != null) {
                    var id = match[1];
                    if (id == undefined || id == 'undefined' || id == -1) {
                        id = 1;
                    }
                    dispatch({
                        type: 'query',
                        payload: { id: id }
                    })
                }
            }

            })
            loaded=true
        },
    },

    state: {
        currentIndex: 0,
        pageIndex: 1,
        totalPage: 2,
    },

    effects: {
        * query({ payload = {} }, { call, put }) {
            console.log(payload);
            const subjectData = yield call([SubjectsApi, 'subjectsIdGet'], payload.id)
            console.log(subjectData);
            if (subjectData) {
                const payload2 = {
                    opts: {
                        query: "subject_id:" + payload.id,
                        model: "accurate"
                    }
                }

                const subjecSeriestData = yield call([SubjectSeriesApi, 'subjectSeriesGet'], payload2.opts)
                if (subjecSeriestData && subjecSeriestData.data) {
                    console.log(subjecSeriestData);
                    var pagesData = [];
                    var dataList = [];
                    subjecSeriestData.data.map((item, index) => {

                        if (dataList.length == 9) {
                            pagesData.push(dataList);
                            dataList = [];
                        }
                        dataList.push(item)
                        if (index == (subjecSeriestData.data.length - 1)) {
                            if (dataList.length > 0) {
                                pagesData.push(dataList);
                            }
                        }
                    })
                    console.log(pagesData);

                    yield put({
                        type: 'querySuccess',
                        payload: {
                            background_url: subjectData.data.background_url,
                            pagesData: pagesData,
                            totalCount: subjecSeriestData.data.length,
                        },
                    })
                }
            }
        },

        * jumpPage({ payload = {} }, { call, put }) {

            yield put(routerRedux.push(`/detail/${payload.seriesId}`));
        },
    },


    reducers: {

        querySuccess(state, { payload }) {

            return {
                ...state,
                background_url: payload.background_url,
                pagesData: payload.pagesData,
                currentIndex: 0,
                pageIndex: 1,
                totalCount: payload.totalCount
            }
        },

        change(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                ...payload
            }
        },

        changeCurrentHeader(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                currentHeader: payload
            }
        }
    }
})
