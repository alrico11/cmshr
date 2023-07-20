import { Container } from '@components'
import React from 'react'

export default function UserDetails({params}:{params : {slug: string}}) {
  return (
    <Container>
        <h1>ini user: {params.slug}</h1>
    </Container>
  )
}
