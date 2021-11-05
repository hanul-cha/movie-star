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
            const { data } = action.payload

            return {
                ...state,
                success: true,
                boxOfficeList: data
            }
        }
        default:
            return state;
    }
}

export default BoxOfficeReducer