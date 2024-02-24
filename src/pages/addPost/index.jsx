
import BottomNavbar from '../../components/bottom-nav'
import { ArrowLeft } from 'lucide-react';
import checkImage from '../../assets/res/ic_tick.svg'
import add from '../../assets/res/add.svg'
import back from '../../assets/res/back.svg'

const AddPost = () => {
    return (
        <div className='pt-3'>
            <div className='flex justify-between'>
                <div className=''>
                    <img src={back} className='h-8' />
                </div>
                <div className='flex bg-green-100 justify-center items-center h-10 w-20 text-center font-bold rounded-lg font text-green-500 outline outline-1'>
                    Post
                    <div className='h-6'>
                        <img src={checkImage} className='h-6 pl-1' />
                    </div>
                </div>
            </div>

            <div className='mt-4 '>
                <h1 className='text-2xl font-bold'>Complete Task,</h1>
                <p className='font-semibold text-gray-500 pb-5'>Post an image to mark the task complete!</p>

                <div className='h-80 bg-green-300 grid justify-items-center rounded-lg'>
                    <div className='font-bold p-2'>
                        Post Image
                    </div>
                    <div className='bg-white rounded-lg'>
                        <img src={add} className='h-40' />
                    </div>
                    <div className='p-1 flex-col justify-center text-center text-sm '>
                        Note:Best when image is a square <br />
                        Ex: 1080x1080p
                    </div>
                </div>
                <br />
                <div className='h-20 bg-green-300 grid justify-items-center rounded-lg '>
                    <div className='font-bold p-2 text-black'>
                        Post Caption
                    </div>
                    <div class="mb-4 w-80">
                    <input class="shadow bg-green-300 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="caption" type="text" placeholder="Some Creative Caption"/>
                    </div>
                </div>
                <BottomNavbar />
            </div>
        </div>
    )
}

export default AddPost