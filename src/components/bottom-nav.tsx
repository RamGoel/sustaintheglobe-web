import { useState } from 'react'
import leaderBoardIcon from '../assets/res/ic_leaderboard.svg'
import feedIcon from '../assets/res/ic_feed.svg'
import profileIcon from '../assets/res/ic_default_profile.svg'
import tasksIcon from '../assets/res/ic_task.svg'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Link } from 'react-router-dom'
const BottomNavbar = () => {
    const [value, setValue] = useState('')
    const navbarConfig = [
        {
            title: 'Leaderboard',
            icon: leaderBoardIcon,
            route: '/leaderboard',
        },
        {
            title: 'Tasks',
            icon: tasksIcon,
            route: '/tasks',
        },
        {
            title: 'Feed',
            icon: feedIcon,
            route: '/feed',
        },
        {
            title: 'Profile',
            icon: profileIcon,
            route: '/profile',
        },

    ]
    return (
        <div className='fixed bottom-0 w-full md:w-1/3'>
            {/* <div className='flex items-center w-full justify-around'>
                {
                    navbarConfig.map(item => {
                        return <div className='p-2 hover:bg-green-200 cursor-pointer bg-green-100 w-full flex items-center justify-center'>
                            <img src={item.icon} width={40} height={40} />
                        </div>
                    })
                }
            </div> */}

            <BottomNavigation value={value} onChange={(val) => setValue(val as any)}>
                {
                    navbarConfig.map(item => {
                        return <BottomNavigationAction
                            component={Link}
                            to={item.route}
                            label={item.title}
                            value={item.title}
                            icon={<img src={item.icon} width={40} height={40} alt='bottom-bar icon' />}
                        />
                    })
                }
            </BottomNavigation>
        </div>
    )
}

export default BottomNavbar