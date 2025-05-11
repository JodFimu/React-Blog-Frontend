import { DashboardPage } from './pages/DashboardPage';
import { CoursePage } from './pages/courses/CoursePage';

export const routes = [
    {path: '/*', element: <DashboardPage/>},
    {path: '/course/:course', element: <CoursePage/>},
]