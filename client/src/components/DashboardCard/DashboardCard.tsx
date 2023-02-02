import React from 'react'
import { IDashboardCardInterface } from '@Utils/interface/ComponentInterface/DashboardCardInterface'
const dashboardCard: React.FC<IDashboardCardInterface> = props => {
  return (
    <div className="d-flex ">
      {props.projectDetails?.map(data => {
        return (
          <div className="dashboardCard">
            <div className="d-flex align-items-center px-4">
              <i className="fa fa-circle status-icon"></i>
              <div className="project-txt px-2">{data.projectName}</div>
            </div>
            <div className="project-helpertxt px-4">{data.projectType}</div>
            <div className="enabled px-4">{data.projectStatus}</div>
            <div className="d-flex align-items-center justify-content-between edge-bg px-4">
              <div>
                <div className="edge-nodes-app">Edge Node</div>
                <div className="d-flex">
                  <i className="fa fa-desktop status-icon py-3"></i>
                  <div className="node-app px-4">60</div>
                </div>
              </div>
              <div>
                <div className="edge-nodes-app">Edge App Instances</div>
                <div className="d-flex">
                  <i className="fa fa-hand-o-up status-icon py-3"></i>
                  <div className="node-app  px-4">80</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default dashboardCard
