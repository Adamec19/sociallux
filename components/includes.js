import React from 'react'

import PropTypes from 'prop-types'

const Includes = (props) => {
  return (
    <>
      <div className={`includes-mark ${props.rootClassName} `}>
        <div className="includes-icon">
          <svg viewBox="0 0 1024 1024" className="includes-icon1">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <label className="includes-label">{props.Label}</label>
      </div>
      <style jsx>
        {`
          .includes-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .includes-icon {
            display: flex;
            padding: 5px;
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #414141;
          }
          .includes-icon1 {
            fill: #c6ff4b;
            width: 12px;
            height: 12px;
          }
          .includes-label {
            color: #c2c6cc;
            font-size: 14px;
            font-family: Poppins;
            line-height: 25px;
          }
        `}
      </style>
    </>
  )
}

Includes.defaultProps = {
  rootClassName: '',
  Label: 'Sed ut pespiciatis unde omnis',
}

Includes.propTypes = {
  rootClassName: PropTypes.string,
  Label: PropTypes.string,
}

export default Includes
