import axios from "axios";
import "../../env";
import { STARDATA_ADD_SUCCESS, STARDATA_GET_SUCCESS, STARDATA_FAIL } from "./starDataActionType";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

export const getStars = (movies) => async (dispatch) => {
    try {
        const instance = await axios.get(`http://localhost:${SERVER_PORT}/api/stars`);

        const data = instance.data

        const getNum = async () => {
            const starList = await data
            const movie = movies
            const numbers = []; 
            movie.forEach((data, z) => {
                for(let i=0; i<starList.length; i++){
                    if(data.movieCd === starList[i].movieCd){
                        numbers[z] = (starList[i].scoreAVG/starList[i].number)
                    break
                    } else {
                        numbers[z] = 0
                    }
                }
            })
            
            return numbers
            
        }
        


        dispatch({
            type: STARDATA_GET_SUCCESS,
            payload: getNum()
        })
    } catch(err) {
        dispatch({
            type: STARDATA_FAIL
        })
    }
} 
