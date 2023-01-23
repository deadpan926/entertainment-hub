import axios from 'axios'
import React, { useEffect } from 'react'
import { Chip } from '@mui/material';
const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((seleted) => seleted.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    }

const fetchGenres = async () => {
    const { data } =  await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=37c1d92df2b4fe876e61beb7fa32b566&language=en-US`
    );
    console.log(genres);
    setGenres(data.genres);
    
};
    useEffect(()=> {
        fetchGenres();

        // return () => {
        //     setGenres({});
        // }
    }, []);
  return (
    <div style={{padding: "6px 0"}}>
        {selectedGenres &&
        selectedGenres.map((genre) => (
        <Chip 
        label={genre.name} 
        style={{ margin : 2}} 
        size = "small"
        color='primary'
        key={genre.id}
        clickable
        onDelete={() => handleRemove(genre)}/>))}

        {genres &&
        genres.map((genre) => (
        <Chip 
        label={genre.name} 
        style={{ margin : 2}} 
        size = "small"
        key={genre.id}
        clickable
        onClick={() => handleAdd(genre)}/>))}
    </div>
  );
};

export default Genres