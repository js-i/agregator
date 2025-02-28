import { newsSlice } from "../lib/newsStore";
import { useNewsDispatch } from "../lib/newsStore";
import { useNewsSelector } from "../lib/newsStore";
import { clsx } from 'clsx'
export default function HeartIcon({ id, className='' }: { id : string | undefined, className: string | undefined}) {
    const dispatch = useNewsDispatch()
    const handleClick = () => {
        console.log(id, 'handle click')
        if (id) dispatch(newsSlice.actions.liked({id}))
    }
    const liked = useNewsSelector(state => newsSlice.selectors.selectLike(state, id))


    return (
      <svg

        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={liked ? "#E57373" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx("w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110", className)}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    );
  }