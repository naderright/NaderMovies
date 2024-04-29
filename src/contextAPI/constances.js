

export  const getOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjFjODRlZjBlOWVmNzVkNDBiZDdiNDcyNTE2MGI4YyIsInN1YiI6IjYxZDM3M2MzOWRlZmRhMDA2NjVkMDhjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3h8npWe_IIf94eneDgWz0HTk-vrz2hdpTvOswR2IFFY'
        
    }}


 export const startLinkImag ='http://image.tmdb.org/t/p/original'; 
 
 
 export const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


 export const getGenreNames = (movie)=>{
    const totalGenre = genres ;

    const genreNamesMovie = [];
    movie.genre_ids?.map((genreId)=>{
            totalGenre.map((genre)=>{
                    genre.id==genreId ? genreNamesMovie.push(genre.name):''
            });
    })
    return genreNamesMovie;
}


export const getNumberOfStars = (movie)=>{
  const numberStars = Math.round(movie.vote_average / 2);
  const mapStar = [];
  for (let index = 0; index < numberStars; index++) {
    mapStar.push(index)

  }
  return mapStar
}