import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { usePostStore } from '../../store/feed.store'
import BottomNavbar from '../../components/bottom-nav'
import ic_points from '../../assets/res/ic_points.svg';
import ic_medal_first from '../../assets/res/ic_medal_first.svg';
import ic_medal_second from '../../assets/res/ic_medal_second.svg';
import ic_medal_third from '../../assets/res/ic_medal_third.svg';

const LeaderBoard = () => {
    const [category, setCategory] = useState('Nearby')
    const options = ['Nearby', 'Country', 'World', 'Followers'];

    return (
        <div className=' w-full md:w-1/3 mx-auto mt-4'>
            <div></div>
            <h1 className='text-2xl font-semibold'>Leaderboard</h1>
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


            <div className='flex items-center my-3 justify-evenly '>
                <div className=" self-end text-center ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" className='h-20 rounded-full w-20 outline outline-offset-1 outline-stone-300' />
                    <div className='flex justify-center'>
                        <img src={ic_medal_second} className='h-6' />
                    </div>
                    <div className="flex justify-center ">
                        <img src={ic_points} className='h-5' />
                        50
                    </div>
                    <div className="">
                        name
                    </div>

                </div>


                <div className=" self-end text-center ">
                    <img src="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" className='h-24 rounded-full outline outline-offset-1 outline-amber-300' />
                    <div className='flex justify-center'>
                        <img src={ic_medal_first} className='h-8' />
                    </div>
                    <div className="flex justify-center ">
                        <img src={ic_points} className='h-5' />
                        50
                    </div>
                    <div className="">
                        name
                    </div>
                </div>



                <div className=" self-end text-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" className='h-20 rounded-full outline outline-offset-1 outline-amber-800' />
                    <div className='flex justify-center'>
                        <img src={ic_medal_third} className='h-6' />
                    </div>
                    <div className="flex justify-center ">
                        <img src={ic_points} className='h-5' />
                        100
                    </div>
                    <div className="">
                        name
                    </div>
                </div>

            </div>



            <BottomNavbar />
        </div>
    )
}

export default LeaderBoard