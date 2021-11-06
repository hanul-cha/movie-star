import { BOXOFFICE_SUCCESS, BOXOFFICE_FAIL } from "../actions/boxOfficeActionType"

const initialState = {
    success: false
}

const BoxOfficeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOXOFFICE_FAIL:
            return {
                ...state,
                success: false
            }
        case BOXOFFICE_SUCCESS: {

            return {
                ...state,
                success: true,
                boxOfficeList: action.payload
            }
        }
        default:
            return state;
    }
}

export default BoxOfficeReducer