import Search from "./search"
import { Suspense } from "react"
import Link from "next/link"
export default function Header() {
    return (
          <header className="bg-white shadow-md px-6 py-2 sticky top-0 z-10">
            <div className="container mx-auto flex gap-3 justify-between items-center">
              <h1 className="hidden md:block text-2xl font-bold text-[#3f3e39f8]">Psychotherapy News</h1>
              <Suspense>
                <Search placeholder='Поиск...'/>
              </Suspense>
              <nav>
                <ul className="flex space-x-6">
                  <li><Link href="/" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Home</Link></li>
                  {/* <li><a href="/" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Categories</a></li> */}
                  {/* <li><Link href="/counter" className="text-[#7a6b64] hover:text-[#5a4a42] font-medium">Counter</Link></li> */}
                </ul>
              </nav>
            </div>
          </header>
    )
}