import { useState, useEffect } from 'react'
import { getMovies } from '../../api/api'
import './Row.css'

const imageHost = 'http://image.tmdb.org/t/p/original/'

export const Row = ({ title, path, isLarge }) => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
    } catch (error) {
      console.log('error fetchMovies: ', error)
    }
  }

  useEffect(() => {
    fetchMovies(path)
  }, [path])

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies.map((movie) => {
          return (
            <img
              className={isLarge ? 'movie-card-large' : 'movie-card'}
              key={movie.id}
              src={imageHost + movie.poster_path}
              alt={movie.name}
            ></img>
          )
        })}
      </div>
    </div>
  )
}
