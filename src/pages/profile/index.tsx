/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import profileIcon from '../../assets/res/ic_default_profile.svg'
import PostCard from '../../components/post-card'
import NoPosts from '../../components/no-posts'
import { ArrowLeft, LogOutIcon, UserPlus } from 'lucide-react'
import { useUserStore } from '../../store/user.store'
import BottomNavbar from '../../components/bottom-nav'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { UserProps } from '../../types/user.types'
import { useLoaderStore } from '../../store/loader.store'

const ProfilePage = () => {
    const { userId } = useParams();
    let [profileUser, setProfileUser] = useState<UserProps | null>(null)
    const { enableLoader, disableLoader } = useLoaderStore()
    const { user } = useUserStore();
    const navigate = useNavigate();


    useEffect(() => {

        const getUserAction = async () => {
            enableLoader()
            const querySnapshot = await getDocs(
                query(collection(db, "Users"), where("userID", "==", userId))
            );

            let docs: UserProps[] = [];
            querySnapshot.forEach((item) => {
                docs.push(item.data());
            });

            if (!docs.length) {
                navigate('/')
            }
            setProfileUser(docs[0])
            disableLoader()
        }
        getUserAction()
    }, [disableLoader, enableLoader, navigate, userId])


    return (
        <div className='flex items-center flex-col justify-top my-auto h-screen '>
            <div className="relative pt-[60px] w-full flex flex-col items-center min-h-[400px]">
                <div className='fixed top-0 left-0 w-full md:w-1/3 bg-green-500 mx-auto p-1 flex items-center justify-between '>
                    <div>
                        <ArrowLeft className='text-white ml-1' />
                    </div>
                    {user?.userID === profileUser?.userID ? <div className='flex items-center w-fit justify-center border-[1.2px] border-gray-300 p-2 rounded-lg bg-white '>
                        <p className='font-semibold text-sm text-green-500'>Logout</p>
                        <LogOutIcon className='text-green-500 ml-1' size={18} />
                    </div> : <div className='flex items-center w-fit justify-center border-[1.2px] border-gray-300 p-2 rounded-lg bg-white '>
                        <p className='font-semibold text-sm text-green-500'>Follow</p>
                        <UserPlus className='text-green-500 ml-1' size={18} />
                    </div>}
                </div>
                <div className='flex py-2 px-3 w-full items-center justify-start'>
                    <img src={profileIcon} width={100} height={100} />
                    <div className='w-full ml-2'>
                        <h2 className='text-lg font-semibold -mb-1'>{profileUser?.fullName}</h2>
                        <h4 className='font-semibold text-md text-gray-400 my-1'>@{profileUser?.username}</h4>
                        <p className='w-fit px-2 bg-gray-200 rounded-xl py-1 text-sm'>
                            {profileUser?.bio}
                        </p>
                    </div>
                </div>
                <div className='flex w-full items-center justify-around'>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{profileUser?.points}</h1>
                        <p className='text-gray-400'>Points</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{profileUser?.completedTasks?.length}</h1>
                        <p className='text-gray-400'>Task Done</p>
                    </div>
                    <div className='w-1/3 text-center'>
                        <h1 className='text-xl font-semibold text-black'>{profileUser?.followers?.length}</h1>
                        <p className='text-gray-400'>Followers</p>
                    </div>
                </div>
                <div className='pb-[100px]'>
                    {
                        profileUser?.posts?.length ? profileUser?.posts.map(item => {
                            return <PostCard {...item} />
                        }) : <NoPosts />
                    }
                </div>
            </div>
            <BottomNavbar />
        </div>
    )
}

export default ProfilePage