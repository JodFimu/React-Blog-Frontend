import { DashboardPage } from './pages/DashboardPage';
import { CoursePage } from './pages/courses/CoursePage';
import { PostDetails } from './pages/postDetails/PostDetails';

export const routes = [
    {path: '/*', element: <DashboardPage/>},
    {path: '/course/:course', element: <CoursePage/>},
    {path: '/post/:id', element: <PostDetails/>},
]