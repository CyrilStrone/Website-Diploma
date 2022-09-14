
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/search'
import { Premium } from './Premium/Ogranoids/premium'
import { Login } from './Login/Organoids/Login'
import { Forgot } from './Forgot/Organoids/Forgot'
import { Registration } from './Registration/Organoids/Registration'

// export interface IRoute {
//     link: string
//     title: string
//     component: JSX.Element
// }

export const Pages = [
    {
        link: '/',
        title: 'Home',
        component: Home,
    },
    {
        link: '/User',
        title: 'User',
        component: User,
    },
    {
        link: '/Login',
        title: 'Login',
        component: Login,
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
        link: '/Forgot',
        title: 'Forgot',
        component: Forgot,
    },
    {
        link: '/Registration',
        title: 'Registration',
        component: Registration,
    },
    
]