import * as Types from './todos.type';
export const addRequest = (params, callback) => ({ type: Types.ADD_REQUEST, params, callback });
export const addSuccess = (payload) => ({ type: Types.ADD_SUCCESS, payload: payload });
export const addError = (error) => ({ type: Types.ADD_ERROR, error });

export const updateRequest = (params, callback) => ({ type: Types.UPDATE_REQUEST, params, callback });
export const updateSuccess = (data) => ({ type: Types.UPDATE_SUCCESS, payload: data });
export const updateError = (error) => ({ type: Types.UPDATE_ERROR, error });

export const completedRequest = (params, callback) => ({ type: Types.COMPLETED_REQUEST, params, callback });
export const completedSuccess = (data) => ({ type: Types.COMPLETED_SUCCESS, payload: data });
export const completedError = (error) => ({ type: Types.COMPLETED_ERROR, error });

export const deleteRequest = (params, callback) => ({ type: Types.DELETE_REQUEST, params, callback });
export const deleteSuccess = (id) => ({ type: Types.DELETE_SUCCESS, payload: id });
export const deleteError = (error) => ({ type: Types.DELETE_ERROR, error });

export const sortRequest = (params, callback) => ({ type: Types.SORT_REQUEST, params, callback });
export const sortSuccess = (payload) => ({ type: Types.SORT_SUCCESS, payload: payload });
export const sortError = (error) => ({ type: Types.SORT_ERROR, error });

export const searchRequest = (params) => ({ type: Types.SEARCH_REQUEST, params });
export const searchSuccess = (payload) => ({ type: Types.SEARCH_SUCCESS, payload: payload });
export const searchError = (error) => ({ type: Types.SEARCH_ERROR, error });
