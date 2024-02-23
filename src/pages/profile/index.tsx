/* eslint-disable @typescript-eslint/no-explicit-any */
import profileIcon from '../../assets/res/ic_default_profile.svg'
import PostCard from '../../components/post-card'
import NoPosts from '../../components/no-posts'
import { UserProps } from '../../types/user.types'
import { ArrowLeft, LogOutIcon, UserPlus } from 'lucide-react'
import { useUserStore } from '../../store/user.store'
import BottomNavbar from '../../components/bottom-nav'



const user: UserProps = {
    fullName: 'Shivam',
    username: 'abesec',
    bio: 'nddjfnejnfj',
    points: 5,
    completedTasks: [],
    followers: [],
    posts: [
        {
            likes: [],
            imageLink: 'https://www.econlib.org/wp-content/uploads/2018/05/recycling-2.jpg',
            // taskName: 'Recycle waste today',
            caption: 'Posted on twitter',
            username: 'abesec',
            postTime: Date.now()
        }
    ]
}
const ProfilePage = () => {
    const { user: user1 } = useUserStore();
    return (
        <div className='flex items-center flex-col justify-top my-auto h-screen '>
            <div className="flex flex-col items-center min-h-[400px] w-full md:w-1/3 p-4">
                <div className='bg-green-500 w-full p-2 flex items-center justify-between '>
                    <div>
                        <ArrowLeft className='text-white ml-1' />
                    </div>
                    {user?.userID === user1?.userID ? <div className='flex items-start w-fit justify-center border-[1.2px] border-gray-300 p-2 rounded-lg bg-white '>
                        <p className='font-semibold text-green-500'>Logout</p>
                        <LogOutIcon className='text-green-500 ml-1' />
                    </div> : <div className='flex items-start w-fit justify-center border-[1.2px] border-gray-300 p-2 rounded-lg bg-white '>
                        <p className='font-semibold text-green-500'>Follow</p>
                        <UserPlus className='text-green-500 ml-1' />
                    </div>}
                </div>
                <div className='flex py-2 px-3 w-full items-center justify-start'>
                    <img src={profileIcon} width={100} height={100} />
                    <div className='w-full ml-2'>
                        <h2 className='text-lg font-semibold -mb-1'>{user.fullName}</h2>
                        <h4 className='font-semibold text-md text-gray-400 my-1'>@{user.username}</h4>
                        <p className='w-fit px-2 bg-gray-200 rounded-xl py-1 text-sm'>
                            {user.bio}
                        </p>
                    </div>
                </div>
                <div className='flex w-full items-center justify-around'>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{user.points}</h1>
                        <p className='text-gray-400'>Points</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{user.completedTasks.length}</h1>
                        <p className='text-gray-400'>Task Done</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{user.followers.length}</h1>
                        <p className='text-gray-400'>Followers</p>
                    </div>
                </div>

                <div>
                    {
                        user.posts.length ? user.posts.map(item => {
                            return <PostCard {...item} />
                        }) : <NoPosts />
                    }
                </div>
                <BottomNavbar />
            </div>
        </div>
    )
}

export default ProfilePage