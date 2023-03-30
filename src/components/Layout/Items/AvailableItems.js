import React, { useState } from "react";
import classes from "./AvailableItems.module.css";
import ProductItems from "./ProductItem/ProductItem";



const AvailableItems = (props) => {
 const [movies, setmovies] = useState([])
 const fetchMovieHandler = () =>{
  fetch('"https://swapi.dev/api/films/', {}).then(response => {
    return response.json();
  }).then(data=>{
    const transformedmovies =data.movies.map(movieData =>{
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crwal,
        releaseDate: movieData.release_date
      }
    })
    setmovies(transformedmovies);
  })
}  
  return (
    <div className={classes.container}>
      <buuton onClick={fetchMovieHandler}>movie</buuton>
      <ProductItems movies= {movies}/>
    </div>
  );
};

export default AvailableItems;
