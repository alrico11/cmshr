"use client"
import images from "@assets/images"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { GetStorage, SetStorage } from "@services/storage"

export default function Header() {
  const pathName = usePathname();
  const localTheme = GetStorage("theme");

  const menuHeader = [
    { name: "Gallery", href: "/gallery/nowplaying" },
    { name: "About Us", href: "/about" },
    { name: "User", href: "/users" }
  ]

  const [isDark, setIsdark] = useState(localTheme === "dark");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    if (localTheme === "light" || localTheme === "dark") {
      setIsdark(localTheme === "dark")
    } else {
      const getCurrentTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsdark(getCurrentTheme());
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    SetStorage("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <header className="px-5 flex flex-row custom-shadow">
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
        )}
      </div>
      <ul className="flex flex-row">
        {menuHeader.map((item, index) => (
          <Link key={index} href={item.href}>
            <li
              className={`${pathName === item.href ? "header-selection" : ""
                } min-w-[100px] justify-center flex py-5 hover:header-selection`}
              onMouseEnter={item.name === "Gallery" ? toggleDropdown : undefined}
              onMouseLeave={item.name === "Gallery" ? toggleDropdown : undefined}
            >
              {item.name}
              {item.name === "Gallery" && isDropdownVisible && (
                <ul className={`m-5 absolute mt-2 py-5 ${isDark ? "bg-dark" : "bg-white" && "text-black"} rounded-md shadow-2xl`}>
                  <Link href={`/gallery/nowplaying`}>
                    <li className={`px-4 py-2`}>Now Playing</li>
                  </Link>
                  <Link href={`/gallery/popular`}>
                    <li className={`px-4 py-2`}>Popular</li>
                  </Link>
                  <Link href={`/gallery/toprated`}>
                    <li className={`px-4 py-2`}>Top Rated</li>
                  </Link>
                  <Link href={`/gallery/upcoming`}>
                    <li className={`px-4 py-2`}>Upcoming</li>
                  </Link>
                </ul>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  )
}