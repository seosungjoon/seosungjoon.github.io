import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//About Me
const Profile = React.lazy(() => import('./views/profile/Profile'))

//Detail
const CompAll = React.lazy(() => import('./views/detail/projComp/AllListComp'))
const UnivAll = React.lazy(() => import('./views/detail/projUniv/AllList'))
const UnivChang2019 = React.lazy(() => import('./views/detail/projUniv/Chang2019'))
const UnivCapstone = React.lazy(() => import('./views/detail/projUniv/Capstone'))
const UnivIctidea = React.lazy(() => import('./views/detail/projUniv/Ictidea'))
const UnivChang2018 = React.lazy(() => import('./views/detail/projUniv/Chang2018'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/profile', name: 'Profile', element: Profile },

  { path: '/detail/projComp/AllListComp', name: '경력사항_롯데정보통신', element: CompAll },

  { path: '/detail/projUniv/UnivAll', name: '전체 목록', element: UnivAll },
  { path: '/detail/projUniv/UnivChang2019', name: '창의설계경진대회_2019', element: UnivChang2019 },
  { path: '/detail/projUniv/UnivCapstone', name: '캡스톤디자인', element: UnivCapstone },
  { path: '/detail/projUniv/UnivChang2018', name: '창의설계경진대회_2018', element: UnivChang2018 },
  { path: '/detail/projUniv/UnivIctidea', name: 'ICT 아이디어공모전', element: UnivIctidea },



]

export default routes
