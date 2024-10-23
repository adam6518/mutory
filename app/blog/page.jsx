import Link from "next/link"
import Heading from '../../components/Heading'

export default function BlogPage() {
    return (
        <>
            <Heading>Blog</Heading>
            <p>List</p>
            <ul>
                <li>
                    <Link href="/blog/belajar-nextjs">Belajar nextjs</Link>
                </li>
                <li>
                    <Link href="/blog/latihan-route-next">Latihan route next</Link>
                </li>
            </ul>
        </>
    )
}