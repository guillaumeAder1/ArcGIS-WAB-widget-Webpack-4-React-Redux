import { ADD_ARTICLE } from "../constants/actiontype";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });