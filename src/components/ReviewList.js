import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import GetMoviesList from "./GetMoviesList";

const ReviewList = () => {
    
    const movieList = GetMoviesList()

    console.log(movieList)
    
    

   
    


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