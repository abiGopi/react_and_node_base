import React, { useState } from 'react'
import { IHeaderInterface } from '@Utils/interface/ComponentInterface/HeaderInterface'
const DropDown: React.FC<IHeaderInterface> = props => {
  const [show, setShow] = useState(false)
  const handleCollapse = () => {
    setShow(!show)
  }
  const showContent = show ? 'show' : ''
  return (
    <div id="accordion" className="dropDownContainer px-5 py-5">
      <div className="card cardborder">
        <div className="" id="headingOne">
          <div className="descriptive-insights d-flex justify-content-between mb-0 px-3 py-3">
            <button
              className="bg-transparent border-0 fw-bold fs-12"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Descriptive Insights
            </button>
            <div className="px-2">
              <i className="fa fa-chevron-down" onClick={handleCollapse}></i>
            </div>
          </div>
        </div>

        <div
          id="collapseOne"
          className={`${showContent} collapse`}
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="descriptive-helpertxt card-body px-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
