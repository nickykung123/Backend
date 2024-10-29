export default async function DisplayNewsByIdPage({
    params
}: {
    params: { id: number }
}) {

    params = await params

    return (
        <>
            <div className="flex w-full items-center justify-center text-4xl mt-4 border border-black h-20 text-black">
                หน้าแสดงข้อมูลข่าวที่ {params.id}
            </div>
        </>
    )
}