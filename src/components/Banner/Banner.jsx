import { useState, useEffect } from 'react'
import categories, { getMovies } from '../../api/api'
import './Banner.css'

export const Banner = () => {
  const [movie, setMovie] = useState({})

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find((category) => category.name === 'netflixOriginals')

      const data = await getMovies(netflixOriginalsCategory.path)
      const movies = data?.results
      const randomIndex = Math.floor(Math.random() * movies.length)
      setMovie(movies[randomIndex])
    } catch (error) {
      console.log('error Banner fetchRandomMovie: ', error)
    }
  }

  useEffect(() => {
    fetchRandomMovie()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.subtr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        roundPosition: 'center-center'
      }}
    >
      <div className="banner-content">
        <div className="banner-title">{movie?.title || movie?.name || movie?.original_name}</div>
        <div className="banner-buttons-container">
          <button className="banner-button">Assistir</button>
          <button className="banner-button">Minha Lista</button>
        </div>
        <div className="banner-description">{truncate(movie?.overview)}</div>
      </div>
    </header>
  )
}
