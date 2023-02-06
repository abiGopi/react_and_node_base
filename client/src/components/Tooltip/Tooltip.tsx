import React from 'react'
import { ITooltipInterface } from '@Utils/interface/ComponentInterface/Tooltip'
const Tooltip: React.FC<ITooltipInterface> = props => {
  return (
    <div className="tooltip-border">
      <div
        className="dropdown"
        data-tooltip="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
      >
        <i className="fa fa-info-circle infoImage" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Tooltip
