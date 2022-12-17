
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/search'
import { Premium } from './Premium/Ogranoids/premium'
import { Login } from './Login/Organoids/Login'
import { Forgot } from './Forgot/Organoids/Forgot'
import { Registration } from './Registration/Organoids/Registration'
import { Major } from './Major/Ogranoids/Major'

// export interface IRoute {
//     link: string
//     title: string
//     component: JSX.Element
// }

export const Pages = [
    {
        link: '/',
        title: 'Major',
        component: Major,
    },
    {
        link: '/Home',
        title: 'Home',
        component: Home,
    },
    {
        link: '/User',
        title: 'User',
        component: User,
    },
    {
        link: '/Search',
        title: 'Search',
        component: Search,
    },
    {
        link: '/Premium',
        title: 'Premium',
        component: Premium,
    },
]
export const PagesLogin = [
    {
        link: '/Registration',
        title: 'Registration',
        class:'HeaderNav_Registration',
        component: Registration,
    },
    {
        link: '/User',
        title: 'User',
        component: User,
    },
    {
        link: '/Forgot',
        title: 'Forgot',
        component: Forgot,
    },
    {
        link: '/Login',
        title: 'Login',
        component: Login,
    }
    
]