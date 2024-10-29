export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex h-10 border-b justify-evenly items-center border-black text-black font-bold">
                <div><a href="../" className="">Home</a></div>
                <div><a href="../about" className="">About</a></div>
                <div><a href="../contact" className="">Contact</a></div>
                <div><a href="../news" className="">News</a></div>
                <div><a href="../Friday" className="">Check Friday</a></div>
                <div><a href="../login" className="">Login</a></div>
                
            </div>
            <div className="">{children}</div>
        </>
 
    )
}