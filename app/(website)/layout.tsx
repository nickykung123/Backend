export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex h-10 border justify-evenly items-center">
                <div><a href="../home" className="">Home</a></div>
                <div><a href="../about" className="">About</a></div>
                <div><a href="../contact" className="">contact</a></div>
            </div>
            <div className="">{children}</div>
        </>
 
    )
}