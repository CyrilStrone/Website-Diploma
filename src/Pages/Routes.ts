
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/search'
import { Premium } from './Premium/Ogranoids/premium'


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
