import { ADD_DATE, MINUS_DATE, GET_API } from "./types"
import GetMoviesList from "../../components/GetMoviesList"



const initialState = {
    list: []
}

const movieListReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_API:
            const movieList = async() => {
                await GetMoviesList().then(res => {
                    const data = res.data.boxOfficeResult.dailyBoxOfficeList
                    return data
                })
            }
            return {
                ...state,
                list: movieList()
            }

            
        case ADD_DATE:
            return {

            }
        case MINUS_DATE:
            return {

            }
    
        default:
            return state
    }
}

export default movieListReducer