export default function Heading({children}) {
    return (
        // children di parameret func atas berasal dari text heading di masing2 page
        <h1 className="text-2xl font-bold pb-3">{children}</h1>
    )
}