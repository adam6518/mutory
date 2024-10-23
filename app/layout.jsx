import NavBar from '../components/Navbar'
import './global.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn next.js</title>
      </head>
      <body className="bg-slate-200 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">Footer</footer>
      </body>
    </html>
  )
}
