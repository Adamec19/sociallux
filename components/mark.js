import React from 'react'

import PropTypes from 'prop-types'

const Mark = (props) => {
  return (
    <>
      <div className="mark-mark">
        <div className="mark-icon">
          <svg viewBox="0 0 1024 1024" className="mark-icon1">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <p className="mark-label">{props.Label}</p>
      </div>
      <style jsx>
        {`
          .mark-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mark-icon {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .mark-icon1 {
            fill: #c6ff4b;
            width: 12px;
            height: 12px;
          }
          .mark-label {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

Mark.defaultProps = {
  Label: 'Duis aute irure dolor in reprehenderit',
}

Mark.propTypes = {
  Label: PropTypes.string,
}

export default Mark
