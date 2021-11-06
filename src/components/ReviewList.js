import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoxOffice } from "../redux/actions/boxOfficeAction";
import GetMoviesList from "./GetMoviesList";


const ReviewList = () => {
    const [list, setList] =useState([])

    /* useEffect(() => {
    const movieList = async() => {
        await GetMoviesList().then(res => {
            const boxOffice = res.data.boxOfficeResult.dailyBoxOfficeList
            setList(boxOffice);
        })
    }
    movieList()
    },[]) */

    const boxOfficeReducer = useSelector((state) => state.BoxOfficeReducer)
    const dispatch = useDispatch()

    const toDay = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + (date.getDate() - 1)).slice(-2);
        return year + month + day;
    }
    const myDay = toDay()

    
    const getApi = () => {
        dispatch(fetchBoxOffice(myDay))
    }

    console.log(boxOfficeReducer);



    return (
        <>
        <ul>
            {list.map(movies => (
                <li key={movies.rnum}>
                    <h2>{movies.movieNm}</h2>
                    
                    <div className="stack">
                    <p className="starAvg">평균 별점 : </p>
                    <Stack spacing={2}>
                        <Rating name="size-small" defaultValue={0} size="small" />
                    </Stack>
                    <button className="rateBtn">반영</button>
                    </div>
                </li>
            ))}
        </ul>

        <div>
            <button onClick={getApi}>test</button>

            {boxOfficeReducer.success && 
                <div>
                    <p>ok</p>
                </div>
            }
        </div>
        </>
    )
}

export default ReviewList