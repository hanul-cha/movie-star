import MovieStar from "./movieStar";

export const processCtrl = {
    get: async (boxOffice) => {
        const moviestar = new MovieStar(boxOffice)
        /* const getMovie = await moviestar.getMovie(); */
        const getNum = await moviestar.getNum();
        /* console.log(getMovie) */
        console.log(getNum)
        return getNum
    }
}