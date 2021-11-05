import axios from "axios";
import "../env";

const MYKEY = process.env.REACT_APP_API_KEY;

export const fetchBoxOffice = (toDay) => async (dispatch) => {
    try {
        const instance = axios.create({
            baseURL: `http://kobis.or.kr/kobisopenapi/webservice/rest`
        });

        const res = await instance.get('boxoffice/searchDailyBoxOfficeList.json', {
            params: {
                key: MYKEY,
                targetDt: `${toDay}`
            }
        });

        const data = res.data

        dispatch({
            type: true,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: false
        })
    }
} 