/* eslint-disable @typescript-eslint/no-explicit-any */
import checkImage from '../assets/res/ic_tick.svg'
import { TaskProps } from '../types/task.types'
import { getCategoryImagePath } from '../utils/mapper'

const TaskCard = ({ data, type, clickHandler }: { data: TaskProps, type: string, clickHandler: () => void }) => {
    const bgColor: any = {
        'daily': 'bg-green-100',
        'weekly': 'bg-orange-100',
        'monthly': 'bg-red-100'
    }
    return (
        <div onClick={() => clickHandler()} className={`cursor-pointer border-2 flex items-center justify-around py-3 px-3 my-3 rounded-lg ${bgColor[type]}`}>
            <div className='p-1 bg-white border-2 rounded-xl'>
                <img src={getCategoryImagePath(data.category)} width={40} height={40} />
            </div>
            <div className='w-8/12 ml-3 '>
                <h4 className='font-semibold'>{data.title}</h4>
                <p className='font-semibold text-green-600 text-sm'>+{data.score} Points</p>
            </div>
            <div className='p-1 bg-white hover:bg-green-100 transition-all cursor-pointer border-2 rounded-xl'>
                <img src={checkImage} alt="check-image" width={40} height={40} />
            </div>
        </div>
    )
}

export default TaskCard