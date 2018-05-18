import { ADD_ARTICLE, ASYNC_ADD_ARTICLE } from "../constants/actiontype";

// export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });

export const addArticle = article => {
    return dispatch => {
        dispatch({ type: ADD_ARTICLE, payload: article })
    }

};

export const asynAddArticle = article => {
    return dispatch => {
        return setTimeout(e => {
            dispatch({ type: ASYNC_ADD_ARTICLE, payload: article })
        }, 3000)
    }
}