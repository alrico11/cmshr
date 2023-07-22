"use client"

import { Container } from "@components"
import { useState } from "react"
import ListUser from "./listUser"

export const metadata = {
  title: "Users"
}


export default function Users() {
  const [search, setSearch] = useState("")
  const onSubmited = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const inputResult = event.currentTarget[0] as HTMLInputElement
    console.log("MENCARII", inputResult.value);
    setSearch(inputResult.value)
  }

  return <Container>
    <div className='min-h-screen flex flex-1 flex-col'>
      <h1 className='text-4xl font-bold'>Cari User</h1>
      <form className="flex mt-5 custom-shadow rounded-xl" onSubmit={onSubmited}>
        <input placeholder="Cari Users" className="flex-1 p-2 text-black rounded-l" />
        <button className="bg-lime-600 px-5 py-2 rounded-r-xl">Cari User</button>
      </form>
      <ListUser search={search} />
    </div>
  </Container>
}