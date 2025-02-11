"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function  Search({ placeholder='Search... ' }: { placeholder: string } ){
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleChange(term: string) {
        console.log(term)
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <input type="text" 
            onChange={(e) => handleChange(e.target.value)} 
            placeholder={placeholder} 
            className="border p-3 rounded-lg w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b29889]" 
            defaultValue={searchParams.get('query')?.toString()}
        />
    )
}