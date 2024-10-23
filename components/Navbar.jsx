import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2" >
                <li>
                    <Link href="/" className="text-blue-800 hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/blog" className="text-blue-800 hover:underline">Blog</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-blue-800 hover:underline">Contact</Link>
                </li>
                <li>
                    <Link href="/about" className="text-blue-800 hover:underline" prefetch={false}>About</Link>
                </li>
            </ul>
        </nav>
    )
}