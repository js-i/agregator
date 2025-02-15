
export default function  Aside() {
    return (
        <aside className="md:w-1/4 bg-white shadow-lg rounded-xl p-5">
            <h2 className="text-2xl font-semibold mb-4 text-[#5a4a42]">Popular Articles</h2>
            <ul className="space-y-4">
                <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 1</a></li>
                <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 2</a></li>
                <li><a href="#" className="text-[#b29889] hover:underline">Popular Article 3</a></li>
            </ul>
      </aside>
    )
}