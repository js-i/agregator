interface CardProps {
    title: string;
    description?: string; // необязательный параметр
    content?: string;     // необязательный параметр
    url?: string;         // необязательный параметр
    image?: string;       // необязательный параметр
    publishedAt?: string; // необязательный параметр
    source?: string;      // необязательный параметр
}


export function Card({title, description, image}: CardProps): React.ReactElement {

    return (
        <div className="bg-white p-5 shadow-lg rounded-xl transition-transform transform hover:scale-105">
            <img src={image} alt="News" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4 text-[#5a4a42]">{title}</h3>
            <p className="text-[#7a6b64] text-sm mt-2 truncate">{description}</p>
            <a href="#" className="text-[#b29889] font-medium mt-3 inline-block">Read more →</a>
        </div>
    )
}