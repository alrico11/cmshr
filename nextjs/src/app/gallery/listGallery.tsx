"use client"

import Satellite from "@services/satellite";
import Link from "next/link";
import { useEffect, useState } from "react";
import Gallery from "./page";
interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    // ...
}

export function ListNowPlaying() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Satellite.get(
                    "https://api.themoviedb.org/3/movie/now_playing",
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRiMzgzNWM0ZTI5ZjI2MjgxMjA2OTU3YmM2ZDVhNiIsInN1YiI6IjY0YmIxMWZkZmQ0YTk2MDBlN2JmYTM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L22eZh0tTcR2WR55j-s5xlwnYBq1-Tmk2YAzVv1RnAA",
                        },
                    }
                );
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div>
            <Gallery>
                <h1 className="justify-items-center text-5xl text-center my-5">Now Playing</h1>
                <div className="mt-5 grid grid-cols-2 gap-4">
                    {movies.map((movie) => (
                        <div className="custom-shadow hover:bg-slate-500 rounded-lg">
                            <Link href={`/gallery/nowplaying/${movie.id}`} className="flex">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-min rounded-lg" />
                                <div className="ml-4">
                                    <p><b>Title</b>      : {movie.title}</p>
                                    <p><b>Overview</b>    : {movie.overview}</p>
                                    <p><b>Realase Date</b>: {movie.release_date}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Gallery>
        </div>
    );
}

export function ListPopular() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Satellite.get(
                    "https://api.themoviedb.org/3/movie/popular",
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRiMzgzNWM0ZTI5ZjI2MjgxMjA2OTU3YmM2ZDVhNiIsInN1YiI6IjY0YmIxMWZkZmQ0YTk2MDBlN2JmYTM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L22eZh0tTcR2WR55j-s5xlwnYBq1-Tmk2YAzVv1RnAA",
                        },
                    }
                );
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div>
            <Gallery>
                <h1 className="justify-items-center text-5xl text-center my-5">Popular</h1>
                <div className="mt-5 grid grid-cols-2 gap-4">

                    {movies.map((movie) => (
                       <div className="custom-shadow hover:bg-slate-500 rounded-lg">
                            <Link href={`/gallery/popular/${movie.id}`} className="flex">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-min rounded-lg" />
                                <div className="ml-4">
                                    <p><b>Title</b>      : {movie.title}</p>
                                    <p><b>Overview</b>    : {movie.overview}</p>
                                    <p><b>Realase Date</b>: {movie.release_date}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Gallery>
        </div>
    );
}

export function ListTopRated() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Satellite.get(
                    "https://api.themoviedb.org/3/movie/top_rated",
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRiMzgzNWM0ZTI5ZjI2MjgxMjA2OTU3YmM2ZDVhNiIsInN1YiI6IjY0YmIxMWZkZmQ0YTk2MDBlN2JmYTM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L22eZh0tTcR2WR55j-s5xlwnYBq1-Tmk2YAzVv1RnAA",
                        },
                    }
                );
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div>
            <Gallery>
                <h1 className="justify-items-center text-5xl text-center my-5">Top Rated</h1>
                <div className="mt-5 grid grid-cols-2 gap-4">

                    {movies.map((movie) => (
                         <div className="custom-shadow hover:bg-slate-500 rounded-lg">
                            <Link href={`/gallery/toprated/${movie.id}`} className="flex">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-min rounded-lg" />
                                <div className="ml-4">
                                    <p><b>Title</b>      : {movie.title}</p>
                                    <p><b>Overview</b>    : {movie.overview}</p>
                                    <p><b>Realase Date</b>: {movie.release_date}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Gallery>
        </div>
    );
}

export function ListUpComing() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Satellite.get(
                    "https://api.themoviedb.org/3/movie/upcoming",
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRiMzgzNWM0ZTI5ZjI2MjgxMjA2OTU3YmM2ZDVhNiIsInN1YiI6IjY0YmIxMWZkZmQ0YTk2MDBlN2JmYTM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L22eZh0tTcR2WR55j-s5xlwnYBq1-Tmk2YAzVv1RnAA",
                        },
                    }
                );
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }
    return (
        <div>
            <Gallery>
                <h1 className="justify-items-center text-5xl text-center my-5">Up Coming</h1>
                <div className="mt-5 grid grid-cols-2 gap-4">

                    {movies.map((movie) => (
                         <div className="custom-shadow hover:bg-slate-500 rounded-lg">
                            <Link href={`/gallery/nowplaying/${movie.id}`} className="flex">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-min rounded-lg" />
                                <div className="ml-4">
                                    <p><b>Title</b>      : {movie.title}</p>
                                    <p><b>Overview</b>    : {movie.overview}</p>
                                    <p><b>Realase Date</b>: {movie.release_date}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Gallery>
        </div>
    );
}