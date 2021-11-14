import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchBoxOffice } from "../redux/actions/boxOfficeAction";
import { getStars } from "../redux/actions/starDataAction";
import { processCtrl } from "../moduls/processCtrl";


const ReviewList = () => {
    const [starNum, setStarNum] = useState([])
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

    /* console.log(boxOfficeReducer) */ //dispatch해서 오게된 값

    const officeList = boxOfficeReducer.success ? boxOfficeReducer.boxOfficeList.boxOfficeResult.dailyBoxOfficeList : []

    /* let boxList = [1];
    const getList = async (movies) => {
        const box = await processCtrl.get(movies)
        
        boxList.push(box)
        
    }
    
    useEffect(() => {
        setStarNum(boxList)
    },[])
    
    
    console.log(boxList) 
    console.log(starNum)  */
    
    useEffect(() => {
        dispatch(getStars(officeList))
    },[boxOfficeReducer])

    if(getListReducer.success){
        getListReducer.starList.then(res => {
            setStarNum(res)
        })
    }
    
    console.log(starNum)
    

    return (
        <>
        <div>
            {boxOfficeReducer.success && 
                <ul>
                    {officeList.map((movies, i) => {
                        /* getList(movies) */
                    
                        
                        return (   
                            <li key={movies.rnum}>
                                <p>{starNum[i]}</p>
                                <div className="movieName">
                                    {
                                        movies.rankOldAndNew === "NEW"
                                        ? <p className="newMovie">NEW</p>
                                        :""
                                    }
                                    <h2>{movies.movieNm}</h2>
                                </div>
                                <div className="stack">
                                <p className="starAvg">평균 별점 : </p>
                                <Stack spacing={2}>
                                    <Rating name="size-small" defaultValue={
                                        1
                                        } size="small" />
                                </Stack>
                                <button className="rateBtn">리뷰</button>
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