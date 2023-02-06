import React from 'react'
import { INavigationInterface } from '@Utils/interface/ComponentInterface/NavigationInterface';
const Navigation: React.FC<INavigationInterface> = props => {
  return (
   <div className='navigation-container d-flex'>
    <div className='navigation-txt py-3'>Home</div>
    <div className='navigation-txt selectedLink px-4 py-3'>User Event</div>
   </div>
  )
}

export default Navigation
