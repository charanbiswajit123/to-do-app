import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./ActionType";
import { RootState } from '../Redux/Reducer'; // Adjust the path based on your project structure

export const makeRequest = (): Action => ({
  type: "MAKE_REQUEST",
});

export const failRequest = (err: string): Action => ({
  type: "FAIL_REQUEST",
  payload: err,
});

export const getItemList = (data: any): Action => ({
  type: "GET_ITEM_LIST",
  payload: data,
});

export const deleteItem = (): Action => ({
  type: "DELETE_ITEM",
});

export const addItem = (): Action => ({
  type: "ADD_ITEM",
});

export const updateItem = (): Action => ({
  type: "UPDATE_ITEM",
});

export const getItemObj = (data: any): Action => ({
  type: "GET_ITEM_OBJ",
  payload: data,
});

export const FetchItemList = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(makeRequest());
    axios.get('http://localhost:8000/item').then(res => {
      const itemlist = res.data;
      dispatch(getItemList(itemlist));
    }).catch(err => {
      dispatch(failRequest(err.message));
    });
  };
};

export const Removeitem = (code: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(makeRequest());
    axios.delete(`http://localhost:8000/item/${code}`).then(() => {
      dispatch(deleteItem());
    }).catch(err => {
      dispatch(failRequest(err.message));
    });
  };
};

export const FunctionAddItem = (data: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(makeRequest());
    axios.post('http://localhost:8000/item', data).then(() => {
      dispatch(addItem());
    }).catch(err => {
      dispatch(failRequest(err.message));
    });
  };
};

export const FunctionUpdateItem = (data: any, code: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(makeRequest());
    axios.put(`http://localhost:8000/item/${code}`, data).then(() => {
      dispatch(updateItem());
    }).catch(err => {
      dispatch(failRequest(err.message));
    });
  };
};

export const FetchItemObj = (code: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(makeRequest());
    axios.get(`http://localhost:8000/item/${code}`).then(res => {
      const itemlist = res.data;
      dispatch(getItemObj(itemlist));
    }).catch(err => {
      dispatch(failRequest(err.message));
    });
  };
};
