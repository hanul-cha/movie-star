import axios from "axios";
import "../../env";
import { STARDATA_ADD_SUCCESS, STARDATA_GET_SUCCESS, STARDATA_FAIL } from "./starDataActionType";

const SERVER_PORT = process.env.SERVER_PORT;

export const getStars = () => async (dispatch) => {
    try {
        const instance = axios.create({
            baseURL: `http://localhost:${SERVER_PORT}/`
        });

        const res = await instance.get('api/stars');

        const data = res.data

        dispatch({
            type: STARDATA_GET_SUCCESS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: STARDATA_FAIL
        })
    }
} 
