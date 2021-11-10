import axios from "axios";
import "../env";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

class MovieStar {
    constructor(boxOffice) {
        this.boxOffice = boxOffice
    }
    
    async getMovie() {
        fetch(`http://localhost:${SERVER_PORT}/api/stars`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            return res
        })

        
    }

    putMovie() {

    }
}




export default MovieStar

/* 
평균구하는 식
4,4,4,4,5,3
인자를 전부 더하고 인자의 겟수 만큼 나누기
*/

/* 
reviewList의 map을 돌리는 와중에 함수에 인자(movieCD)를 전달
rL의 인자와 서버의 인자를 비교해서 같다면 true와 계산된 score를 리턴
리턴된 인자중 true가 있다면 다음인자 score를 할당
false라면 0으로 할당
*/

/* 
버튼을 누르면 서버요청으로
"scoreAVG" :8,
"number": 2
이 두가지 값만 변경
*/