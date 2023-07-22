"use client"
import Satellite from '@services/satellite';
import React, { useEffect, useState } from 'react';
import Gallery from '../page';
interface MovieDetailsProps {
  movieId: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await Satellite.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRiMzgzNWM0ZTI5ZjI2MjgxMjA2OTU3YmM2ZDVhNiIsInN1YiI6IjY0YmIxMWZkZmQ0YTk2MDBlN2JmYTM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L22eZh0tTcR2WR55j-s5xlwnYBq1-Tmk2YAzVv1RnAA',
          },
        });
        console.log(response.data)
        setMovieDetails(response.data);
      } catch (error) {
        console.log("ERROR DATA" + error);
      }
    }

    getMovieDetails();
  }, [movieId]);

  console.log("movie id", movieId);

  return (
    <div>
      <Gallery>
        <div>
          {movieDetails && (
            <div>
              <h1 className="justify-items-center text-5xl text-center my-5">{movieDetails.title}</h1>
              <div className='flex flex-row justify-center'>
                <div>
                  <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt='Profile' className='w-64 h-auto mx-auto rounded-lg' />
                </div>
                <div className='mx-100 ml-4'>
                  <p className='text-s font-bold'>Popularity: {movieDetails.popularity}</p>
                  <p className='text-s font-bold'>Revenue: {movieDetails.revenue}</p>
                  <p className='text-s font-bold'>Runtime: {movieDetails.runtime}</p>
                  <p className='text-s font-bold'>Status: {movieDetails.status}</p>
                  <p className='text-s font-bold'>Vote Count: {movieDetails.vote_average}</p>
                  <p className='text-s font-bold'>Vote Average: {movieDetails.vote_count}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Gallery>
    </div>
  );
};
export default MovieDetails;