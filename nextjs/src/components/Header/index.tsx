"use client"

import images from "@assets/images"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const menuHeader = [
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "User", href: "/users" }
  ]

  const [isDark, setIsdark] = useState(false);

  useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsdark(getCurrentTheme());
  }, [])

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")

    }
  })
  return (
    <header className="px-5 flex flex-row shadow-lg">
      <h1 className="flex-1 py-4">
        <Link href="/" className="flex flex-row">
          <Image
            src={images.LOGO_BERIJALAN}
            width={30}
            height={30}
            alt="logo"
          />
          <h1 className="text-xl right-1 ml-2 font-extrabold">berijalan</h1>
        </Link>
      </h1>

      <div className="px-5 py-5" style={{ cursor: "pointer" }} onClick={() => setIsdark(!isDark)}>
        {isDark ? (
          <Image src={images.LIGHT} width={24} height={24} alt="light" />
        ) : (
          <Image src={images.DARK} width={24} height={24} alt="dark" />
        )

        }

      </div>

      <ul className="flex flex-row">
        {menuHeader.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className="min-w-[100px] justify-center flex py-5 hover:font-bold hover:bg-slate-200">{item.name}</li>
          </Link>
        ))}
      </ul>
    </header>
  )
}