import { Container } from '@components'
import React from 'react'

export default function GalleryDetails({ params }: { params: { list: string } }) {
    return (
        <Container>
            <h1 className='text-6xl'>ini gallery: {params.list}</h1>
        </Container>
    )
}
