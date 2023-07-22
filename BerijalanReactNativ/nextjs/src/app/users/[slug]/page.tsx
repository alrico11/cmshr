import { Container } from '@components'
import Satellite from '@services/satellite'
import React from 'react'

async function getUserData(param: string){
  let res
  await Satellite.get('https://api.github.com/users/' + param)
    .then((response) => {
      res = response.data
      console.log(res)
    }).catch((error) => {
      console.log("ERROR DATA" + error)
    })
    return res
}
export default async function UserDetails({ params }: { params: { slug: string }; }) {
  const data = (await getUserData(params.slug)) as any;
  return (
    <Container>
      <div className='flex flex-1 justify-center items-center min-h-screen flex-col'>
      <img src={data?.avatar_url} alt='Profile' className='w-10 h-10 rounded-full' />
        <h1 className='text-4xl font-bold'>Detail User : {params.slug}</h1>
        <h1 className='text-4xl font-bold'>ID : {data?.id}</h1>
        <h1 className='text-4xl font-bold'>GIT URL : {data?.html_url}</h1>
        <h1 className='text-4xl font-bold'>LOCATION : {data?.location}</h1>
      </div>
    </Container>
  )
}
