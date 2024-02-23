/* eslint-disable @typescript-eslint/no-explicit-any */
import cogIcon from '../../assets/res/ic_settings.svg'
import profileIcon from '../../assets/res/ic_default_profile.svg'
import PostCard from '../../components/post-card'
import NoPosts from '../../components/no-posts'
import { UserProps } from '../../types/user.types'



const user: UserProps = {
    fullName: 'Shivam',
    username: 'abesec',
    bio: 'nddjfnejnfj',
    points: 5,
    completedTasks: [],
    followers: [],
    posts: [
        {
            likes: 0,
            image: 'https://www.econlib.org/wp-content/uploads/2018/05/recycling-2.jpg',
            taskName: 'Recycle waste today',
            caption: 'Posted on twitter',
            username: 'abesec',
            createdAt: Date.now()
        }
    ]
}
const ProfilePage = () => {
    return (
        <div className='flex items-center flex-col justify-top my-auto h-screen '>
            <div className="flex flex-col items-center min-h-[400px] w-full md:w-1/3 p-4">
                <div className='flex items-center justify-end w-full'>
                    <img src={cogIcon} width={35} height={35} />
                </div>
                <div className='flex py-2 w-full items-center justify-start'>
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
            </div>
        </div>
    )
}

export default ProfilePage