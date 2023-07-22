import Satellite from "@services/satellite"
import useSWR from "swr"
import Link from "next/link"
import Image from "next/image"
const fetcher = (url: string) => Satellite.get(url).then(res => res.data)

interface Props {
    search: string
}

export default function ListUser({ search }: Props) {
    const { data, error, isLoading } = useSWR(
        'https://api.github.com/search/users?q=' + search,
        fetcher)

    return (
        <div className="mt-5">
            {isLoading ? (
                <p>Mohon Tunggu ...</p>
            ) : search === "" ? (
                <p>Silakan masukkan kata kunci pencarian</p>
            ) : error ? (
                <p>Terjadi Kesalahan</p>
            ) : (
                <p>
                    {data.items.map((item: any, index: number) => (
                        <Link key={index} href={`/users/${item.login}`}>
                            <div className="custom-shadow hover:bg-lime-900 bg-lime-700 px-5 py-2 rounded-md text-black my-5">
                                <Image
                                    src={item.avatar_url}
                                    width={50}
                                    height={50}
                                    alt={"AVATAR " + item.login}
                                ></Image>
                                <p>{item.login}</p>
                            </div>
                        </Link>
                    ))}
                </p>
            )}
        </div>
    );
}