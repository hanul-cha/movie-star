import axios from "axios";
import "../env";

export default async function GetMoviesList() {

        
    const MYKEY = process.env.REACT_APP_API_KEY;
    const toDay = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + (date.getDate() - 1)).slice(-2);
        return year + month + day;
    }

    const instance = axios.create({
        baseURL: `http://kobis.or.kr/kobisopenapi/webservice/rest`
    });

    const moviesList = async() => {
        try {
            return await instance.get('boxoffice/searchDailyBoxOfficeList.json', {
                params: {
                    key: MYKEY,
                    targetDt: `${toDay()}`
                }
                
            })
            /* .then(res => {
                return res
            }) */
        
        } catch {

        }
    }
    const list = await moviesList()
    return list
}