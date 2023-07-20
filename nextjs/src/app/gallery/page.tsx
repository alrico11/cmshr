import { Container } from "@components"

export const metadata = {
    title: "Gallery"
}

export default function Gallery(){
    return <Container>
    <div className='min-h-screen flex flex-1 justify-center items-center'>
    <h1 className='text-6xl font-bold'>Gallery</h1>
    </div>
  </Container>
}