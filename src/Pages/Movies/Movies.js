import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenre';
const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=37c1d92df2b4fe876e61beb7fa32b566&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);
  
    setContent(data.results)
    setNumOfPages(data.total_pages)
  };
  useEffect(() => {
    fetchMovies();
}, [page, genreforURL]);
  
  return (
    <div>
        <span className='pageTitle'>Movies</span>
        <Genres
        type='movie' 
        selectedGenres={selectedGenres} 
        setSelectedGenres = {setSelectedGenres}
        genres={genres}
        setGenres = {setGenres}
        setPage={setPage}
        />


        <div className='trending'>
          {
            content && content.map((c) => 
            (<SingleContent key={c.id} 
              id={c.id} poster={c.poster_path} 
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
                />))
          }
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        )}
        
    </div>
  )
}

export default Movies