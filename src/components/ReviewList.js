import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchBoxOffice } from "../redux/actions/boxOfficeAction";
import { getStars } from "../redux/actions/starDataAction";
import { processCtrl } from "../moduls/processCtrl";


const ReviewList = () => {
    /* const [starNum, setStarNum] = useState([]) */
    const boxOfficeReducer = useSelector((state) => state.BoxOfficeReducer)
    const getListReducer = useSelector((state) => state.GetListReducer)
    const dispatch = useDispatch()

    
    const toDay = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + (date.getDate() - 1)).slice(-2);
        return year + month + day;
    }
    const myDay = toDay() /* 20211104 */

    useEffect(() => {
        dispatch(fetchBoxOffice(myDay))
    },[])

    const officeList = boxOfficeReducer.success ? boxOfficeReducer.boxOfficeList.boxOfficeResult.dailyBoxOfficeList : []
    
    useEffect(() => {
        dispatch(getStars(officeList))
    },[boxOfficeReducer.success])

   /*  console.log(getListReducer.starList) */
    

    return (
        <>
        <div>
            {boxOfficeReducer.success && 
                <ul>
                    {officeList.map((movies, i) => {
                        const test = getListReducer.starList[i]
                
                        console.log(test)
                        return (   
                            <li key={i}>
                                {/* <p>{getListReducer.starList[i]}</p> */}
                                <div className="movieName">
                                    {
                                        movies.rankOldAndNew === "NEW"
                                        ? <p className="newMovie">NEW</p>
                                        :""
                                    }
                                    <h2>{movies.movieNm}</h2>
                                </div>
                                <div className="stack">
                                <p className="starAvg">평균 별점 : {test} 점</p>
                                
                                {/* <Stack spacing={2}>
                                    <Rating name="size-small" defaultValue={1} size="small" />
                                </Stack> */}
                                <button className="rateBtn">POST</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
        </>
    )
}

export default ReviewList