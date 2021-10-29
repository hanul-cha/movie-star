import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { connect } from "react-redux";
import { getApi } from "../redux/movieList/action";

const ReviewList = (props) => {
    const [list, setList] =useState([])
    
    
    useEffect(() => {
        props.getApi()
    },[])


    console.log(props)
    //이렇게 하면 되긴 하는데... 이방법으로 리덕스 초기값에 넣을수 있을까??
   
    


    return (
        <>
        {list.map(movies => (
            <div key={movies.rnum}>
                <h2>{movies.movieNm}</h2>
                <Stack spacing={2}>

                    <Rating name="size-small" defaultValue={1} size="small" />
                    
                </Stack>
            </div>
        ))}

        <div>
            
        </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        movieList: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getApi: () => dispatch(getApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)