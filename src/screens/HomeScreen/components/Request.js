const API_KEY = "ae96c2c5322697f3e275e82d6615166b";

const requests = {
   fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-GB`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-GB`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchUpcomingMoviesIndia: `/movie/upcoming?api_key=${API_KEY}&language=en-IN&region=IN`,
    fetchTvShows : `/tv/top_rated?api_key=${API_KEY}&language=en-IN`,
    fetchTopHindiMovies :`/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=vote_average.desc&vote_count.gte=50`,
}


export default requests;
