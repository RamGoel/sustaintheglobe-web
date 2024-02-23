import { Clock3Icon, HeartIcon, UserCircle2 } from "lucide-react"
import { COLORS } from "../utils/colors"
import moment from "moment"

const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export type PostCardProps = {
    likes: number,
    image: string,
    taskName: string,
    caption: string,
    username: string,
    createdAt: number
}
const PostCard = ({
    likes,
    image,
    taskName,
    caption,
    username,
    createdAt
}: PostCardProps) => {
    return (
        <div className="relative p-2 rounded-xl bg-white border-2 my-3">
            <img src={image} width={'100%'} height={'300px'} className="rounded-xl h-[250px] object-cover" />
            <div className="w-[50px] bg-green-100 p-2 border-2 text-center rounded-lg absolute top-5 right-5">
                <HeartIcon color={COLORS.primary} className="mx-auto" size={25} />
                <p className="text-center text-green-500 font-semibold">{likes}</p>
            </div>
            <div className="py-2">
                <h2 className="text-xl font-semibold">{taskName}</h2>
                <p className="text-sm text-gray-400">Caption: {caption}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center bg-gray-100 p-1 rounded-xl px-2 justify-start">
                    <UserCircle2 size={18} color={COLORS.primary} />
                    <p className="text-xs ml-1 -mt-1">@{username}</p>
                </div>
                <div className="flex items-center bg-gray-100 p-1 rounded-xl px-2 justify-start">
                    <Clock3Icon size={18} color={COLORS.primary} />
                    <p className="text-xs ml-1 -mt-1">
                        {weeks[moment(createdAt).isoWeekday() - 1]} {moment(createdAt).format('DD MMM, YYYY')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostCard