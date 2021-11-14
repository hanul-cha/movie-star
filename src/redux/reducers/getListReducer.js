import { STARDATA_GET_SUCCESS, STARDATA_FAIL } from "../actions/starDataActionType"

const initialState = {
    success: false
}

const GetListReducer = (state = initialState, action) => {
    switch (action.type) {
        case STARDATA_FAIL:
            return {
                ...state,
                success: false
            }
        case STARDATA_GET_SUCCESS: {

            return {
                ...state,
                success: true,
                starList: action.payload
            }
        }
        default:
            return state;
    }
}

export default GetListReducer