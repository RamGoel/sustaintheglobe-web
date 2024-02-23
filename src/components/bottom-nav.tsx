import leaderBoardIcon from '../assets/res/ic_leaderboard.svg'
import feedIcon from '../assets/res/ic_feed.svg'
import profileIcon from '../assets/res/ic_default_profile.svg'
import tasksIcon from '../assets/res/ic_task.svg'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Link } from 'react-router-dom'
const BottomNavbar = () => {
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
            route: '/profile/me',
        },

    ]
    return (
        <div className='fixed z-0 bottom-0 w-full md:w-1/3'>
            <BottomNavigation>
                {
                    navbarConfig.map(item => {
                        return <BottomNavigationAction
                            component={Link}
                            to={item.route}
                            label={item.title}
                            value={item.title}
                            icon={<img src={item.icon} width={30} height={30} alt='bottom-bar icon' />}
                        />
                    })
                }
            </BottomNavigation>
        </div>
    )
}

export default BottomNavbar