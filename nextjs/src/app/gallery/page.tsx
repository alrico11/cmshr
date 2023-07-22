import { Container } from "@components"
import Link from "next/link"
import GalleryDetails from "./[...list]/page";
export const metadata = {
  title: "Gallery"
}

export default function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <Container>
       <h1 className='my-10 text-6xl text-center'>GALLERY MOVIE</h1>
      <div className='min-h-screen flex flex-1 items-center flex-col item text-lg'>
        <div className="mt-1">
          <nav className="navbar">
            <ul className="navbar-menu">
              <li className="navbar-item">
                <Link href={`/gallery/nowplaying`}>
                  <div className="navbar-link">Now Playing</div>
                </Link>
              </li>
              <li className="navbar-item">
                <Link href={`/gallery/popular`}>
                  <div className="navbar-link">Popular</div>
                </Link>
              </li>
              <li className="navbar-item">
                <Link href={`/gallery/toprated`}>
                  <div className="navbar-link">Top Rated</div>
                </Link>
              </li>
              <li className="navbar-item">
                <Link href={`/gallery/upcoming`}>
                  <div className="navbar-link">Upcoming</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </div>
    </Container>
  );
}