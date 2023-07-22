import { Container } from '@components'
import React from 'react'
import { ListNowPlaying, ListPopular, ListTopRated, ListUpComing } from '../listGallery';
import MovieDetails from './listmovie';


export default function GalleryDetails({ params }: { params: { list: string[] } }) {
    const firstSlug = params.list[0];
    const secondSlug = parseInt(params.list[1]);
    const lastNested = params.list[params.list.length - 1];
    const allowedValues = ["nowplaying", "popular", "toprated", "upcoming"];
    const isAllowed = allowedValues.includes(firstSlug);

    return (
        <Container>
            {isAllowed ? (
                secondSlug ? (
                    <MovieDetails movieId={secondSlug} />
                ) : (
                    <div>
                        {firstSlug === "nowplaying" && (
                            <ListNowPlaying />
                        )}
                        {firstSlug === "popular" && (
                            <ListPopular />
                        )}
                        {firstSlug === "toprated" && (
                            <ListTopRated />
                        )}
                        {firstSlug === "upcoming" && (
                            <ListUpComing />
                        )}
                    </div>
                )
            ) : (
                <h1 className='text-6xl'>Galeri tidak tersedia</h1>
            )}
        </Container>
    )
}   