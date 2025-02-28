import Image from "next/image";
import Link from "next/link";
import HeartIcon from "./heartIcon";

interface CardProps {
    id?: string,
    title: string;
    description?: string; // необязательный параметр
    content?: string;     // необязательный параметр
    url?: string;         // необязательный параметр
    image?: string;       // необязательный параметр
    publishedAt?: string; // необязательный параметр
    source?: string;      // необязательный параметр
    liked?: boolean;
}


export function Card({title, description, image, id}: CardProps): React.ReactElement {
    return (
        <div className="flex flex-col gap-1 bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105">
            {image && 
                <Image 
                    src={image} 
                    width={250}
                    height={190}
                    alt="News" 
                    className="rounded-lg w-full" 
                />
            }
            <h3 className="text-xl font-semibold mt-4 text-[#5a4a42]">{title}</h3>
            {description && 
                <p className="truncate text-[#7a6b64] text-sm mt-auto">
                    {description}
                </p>         
            }
            <div className="flex mt-2">
                <Link href={`/${id}`} title={title} className="text-[#b29889] mb-3 font-medium inline-block mr-auto">Читать далее →</Link>
                <HeartIcon id={id} className=""/>
            </div>
        </div>
    )
}