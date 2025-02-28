import Link from "next/link";
import HeartIcon from "./heartIcon";

export default function LikedArticle({ url, title, id} : { url: string, title: string, id: string | undefined}) {
    return (
      <li className="flex">
          <Link href={url} className="text-[#b29889] hover:underline truncate">{title}</Link>
          <HeartIcon id={id} className='min-w-4'/>
      </li>
    )
  }