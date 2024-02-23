import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { usePostStore } from '../../store/feed.store'
import NoPosts from '../../components/no-posts'
import PostCard from '../../components/post-card'
import BottomNavbar from '../../components/bottom-nav'

const FeedPage = () => {
    const [category, setCategory] = useState('Nearby')
    const { posts, savePosts } = usePostStore();
    const options = ['Nearby', 'Country', 'World'];

    return (
        <div className=' w-full md:w-1/3 mx-auto mt-4'>
            <div></div>
            <h1 className='text-2xl font-semibold'>Feed</h1>
            <p className='font-semibold text-gray-500'>See what others have Done!</p>

            <div className='flex items-center justify-start my-3'>
                {
                    options.map(option => {
                        return <div onClick={() => setCategory(option)} className={`cursor-pointer transition-all flex mr-2 items-center justify-center px-4 py-1 rounded-lg font-semibold text-xs border-2  ${category === option ? 'bg-green-500 border-green-500 text-white' : 'text-gray-500 border-gray-300 '}`}>
                            {category === option ? <CheckIcon size={14} className='mr-1' /> : null} {option}
                        </div>
                    })
                }
            </div>

            {
                posts?.length ? posts.map(item => {
                    return <PostCard {...item} />
                }) : <NoPosts />
            }
            <BottomNavbar />
        </div>
    )
}

export default FeedPage