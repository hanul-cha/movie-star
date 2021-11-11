import MovieStar from "./movieStar";

export const processCtrl = {
    get: async (boxOffice) => {
        const moviestar = new MovieStar(boxOffice)
        const getNum = await moviestar.getNum();
        /* console.log(getNum) */
        return getNum
    }
}