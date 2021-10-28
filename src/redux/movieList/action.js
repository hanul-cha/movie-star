import { ADD_DATE, MINUS_DATE } from "./types"

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