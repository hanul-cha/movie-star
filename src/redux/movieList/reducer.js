import { ADD_DATE, MINUS_DATE, GET_API } from "./types"
import GetMoviesList from "../../components/GetMoviesList"




const movieListReducer = (state=[], action) => {
    switch (action.type) {
        case GET_API:
            const movieList = async() => {
                await GetMoviesList().then(res => {
                    
                })
            }
            movieList();

            return {
                
            }
        case ADD_DATE:
            return {

            }
        case MINUS_DATE:
            return {

            }
    
        default:
            break;
    }
}