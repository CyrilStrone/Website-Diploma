
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/Search'
import { Premium } from './Premium/Ogranoids/premium'
import { Login } from './Login/Organoids/Login'
import { Forgot } from './Forgot/Organoids/Forgot'
import { Registration } from './Registration/Organoids/Registration'
import { AnotherUser } from './AnotherUser/Ogranoids/AnotherUser'

// export interface IRoute {
//     link: string
//     title: string
//     component: JSX.Element
// }

export const Pages = [
    {
        link: 'Home',
        title: 'Home',
        component: Home,
    },
    {
        link: 'User',
        title: 'User',
        component: User,
    },
    {
        link: 'Search',
        title: 'Search',
        component: Search,
    },
    {
        link: 'Premium',
        title: 'Premium',
        component: Premium,
    },
]
export const PagesAnotherUser = [
    {
        link: 'AnotherUser',
        title: 'AnotherUser',
        component: AnotherUser,
    }
]
export const PagesLogin = [
    {
        link: 'Registration',
        title: 'Регистрация',
        class:'HeaderNav_Registration',
        component: Registration,
    },
    {
        link: 'User',
        title: 'Пользователь',
        component: User,
    },
    {
        link: 'Forgot',
        title: 'Forgot',
        component: Forgot,
    },
    {
        link: 'Login',
        title: 'Вход',
        component: Login,
    }
    
]