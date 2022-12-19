
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/Search'
import { Chat } from './Chat/Ogranoids/Chat'
// import { Forgot } from './Forgot/Organoids/Forgot'

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
        link: 'Chat',
        title: 'Chat',
        component: Chat,
    },
]

