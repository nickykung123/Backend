import Link from "next/link"
import newsdb from "./db"

async function getAllNews(){
    return newsdb
}

export default async function NewPage() {

    const news_list = await getAllNews()

    return (
        <>
            <div className="flex flex-col w-full items-center text-4xl mt-10">
                <h1 className="text-5xl font-bold mb-6 text-gray-800 border-b border-black pb-4 w-3/4 text-left">
                    หน้าแสดงรายการข่าว
                </h1>
                <div className="w-3/4">
                    <ul className="text-2xl text-gray-700 space-y-4">
                        {news_list.map(item => (
                            <li key={item.id} className="border-b pb-3">
                                <Link href={`/news/${item.id}`} className="hover:underline text-purple-700">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
