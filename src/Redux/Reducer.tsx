import { Action } from "./ActionType";

interface State {
    loading: boolean;
    itemlist: any[]; // Adjust the type based on the actual shape of your itemlist
    itemobj: any; // Adjust the type based on the actual shape of your itemobj
    errmessage: string;
}

const initialState: State = {
    loading: true,
    itemlist: [],
    itemobj: {},
    errmessage: '',
};

export type RootState = any;

export const Reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case "MAKE_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FAIL_REQUEST":
            return {
                ...state,
                loading: false,
                errmessage: action.payload,
            };
        case "GET_ITEM_LIST":
            return {
                loading: false,
                errmessage: '',
                itemlist: action.payload,
                itemobj: {},
            };
        case "DELETE_ITEM":
            return {
                ...state,
                loading: false,
            };
        case "ADD_ITEM":
            return {
                ...state,
                loading: false,
            };
        case "UPDATE_ITEM":
            return {
                ...state,
                loading: false,
            };
        case "GET_ITEM_OBJ":
            return {
                ...state,
                loading: false,
                itemobj: action.payload,
            };
        default:
            return state;
    }
};
