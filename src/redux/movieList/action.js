import { ADD_DATE, MINUS_DATE, GET_API } from "./types"

export const addDateApi = () => {
    return {
        type: ADD_DATE
    }
}

export const minusDateApi = () => {
    return {
        type: MINUS_DATE
    }
}

export const getApi = () => {
    return {
        type: GET_API
    }
}