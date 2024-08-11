import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Main',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'About Me',
  },
  {
    component: CNavItem,
    name: 'profile',
    to: '/profile',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Detail',
  },
  {
    component: CNavGroup,
    name: 'Projects (경력)',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'KT DS',
        to: '/detail/projComp/AllListCompKT',
      },
      {
        component: CNavItem,
        name: '롯데정보통신',
        to: '/detail/projComp/AllListComp',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Projects (학사)',
    to: '/detail',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '전체 목록',
        to: '/detail/projUniv/UnivAll',
      },
      {
        component: CNavItem,
        name: '창의설계경진대회_2019',
        to: '/detail/projUniv/UnivChang2019',
      },
      {
        component: CNavItem,
        name: '캡스톤디자인',
        to: '/detail/projUniv/UnivCapstone',
      },
      {
        component: CNavItem,
        name: 'ICT 아이디어공모전',
        to: '/detail/projUniv/UnivIctidea',
      },
      {
        component: CNavItem,
        name: '창의설계경진대회_2018',
        to: '/detail/projUniv/UnivChang2018',
      },
    ],
  },
  /*{
    component: CNavTitle,
    name: 'Skills',
  },
  {
    component: CNavItem,
    name: 'Do Languages',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },*/

]

export default _nav
