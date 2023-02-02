import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { IDefaultPageProps, IReducerState } from '@Utils/interface'
import { URLS } from '@Utils/constants'
import { IS_USER_AUTHENTICATED } from '@Utils/storage'
import { fetchUsers, updateUser, deleteUser } from '@Reducers/index'
import Header from '@Components/Header/header'
import DashboardCard from '@Components/DashboardCard/DashboardCard'
const dummyData = [
  {
    projectName: 'Coimbatore',
    projectStatus: 'Enabled',
    projectType: 'Regular',
  },
  {
    projectName: 'Chennai',
    projectStatus: 'Disabled',
    projectType: 'Azure',
  },
]
const DashboardComponent: React.FC<IDefaultPageProps> = props => {
  useEffect(() => {
    if (!IS_USER_AUTHENTICATED()) {
      props.navigate(URLS.LOGIN)
    }
    props.dispatch(fetchUsers())
  }, [])

  const onLogout = () => {
    console.log('logout clicked')
    IS_USER_AUTHENTICATED('false')
    props.navigate(URLS.LOGIN)
  }

  return (
    <div className="dashboard-page-main-container">
      <Header userName={'Peter'} handleLogout={onLogout} />
      <DashboardCard projectDetails={dummyData} />
    </div>
  )
}

export default DashboardComponent
