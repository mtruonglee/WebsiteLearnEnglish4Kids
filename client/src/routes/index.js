import HomePage from '../pages/HomePage/index'
import CourseDetail from '../pages/CourseDetail'
import LearningPage from '../pages/LearningPage'
import CoursesPage from '../pages/CoursesPage/index.jsx'
import CreatePage from '../pages/CreatePage'
import SignIn from '../pages/SignIn/index.jsx'
import SignUp from '../pages/SignUp/index.jsx'
import GamePage from '../pages/Games/index.jsx'
import CourseManagePage from '../pages/CourseManagePage/index.jsx'
import EditCoursePage from '../pages/EditCoursePage/index.jsx'
import InforPage from '../pages/InforPage/index.jsx'
import EditInforPage from '../pages/EditInforPage/index.jsx'


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/courses', component: CoursesPage },
    { path: '/courses/:CourseId', component: CourseDetail },
    { path: '/coursesmanage', component: CourseManagePage },
    { path: '/coursesmanage/create', component: CreatePage },
    { path: '/coursesmanage/edit/:CourseId', component: EditCoursePage },
    { path: '/learning/:CourseId', component: LearningPage },
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
    { path: '/game', component: GamePage },
    { path: '/user/infor', component: InforPage },
    { path: '/user/editinfor', component: EditInforPage }
]

export default publicRoutes