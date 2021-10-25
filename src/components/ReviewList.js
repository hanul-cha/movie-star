import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from "axios";

const ReviewList = () => {

    const instance = axios.create({
        baseURL: `http://kobis.or.kr/kobisopenapi/webservice/rest`
    });

    const getMoviesList = async() => {
       try {
        const response = await instance.get('boxoffice/searchDailyBoxOfficeList.json', {
            params: {
                key: '5b8f6908808242788ed34e31613a7fbe',
                targetDt: '20210220'
            }
            
        })
        console.log(response)
       } catch {

       }
    } 
    
    getMoviesList()


    return (
        <div>
            <Stack spacing={2}>
                <Rating name="size-small" defaultValue={1} size="small" />
                <Rating name="size-medium" defaultValue={2} />
                <Rating name="size-large" defaultValue={3} size="large" />
            </Stack>
        </div>
    )
}

export default ReviewList