import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import GetMoviesList from "./GetMoviesList";

const ReviewList = () => {
    const [list, setList] =useState([])

    useEffect(() => {
    const movieList = async() => {
        await GetMoviesList().then(res => {
            const boxOffice = res.data.boxOfficeResult.dailyBoxOfficeList
            setList(boxOffice);
        })
    }
    movieList()
    },[])
    
    //이렇게 하면 되긴 하는데... 이방법으로 리덕스에 넣을수 있을까??
    //비동기로 처리하면 무수한 프라미스를 반환할뿐... redux-thunk를 사용해야한다고함...
   
    console.log(list)


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
            
        </div>
        </>
    )
}

export default ReviewList