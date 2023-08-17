import React from 'react'

import PropTypes from 'prop-types'

const Accordion = (props) => {
  return (
    <>
      <div className={`accordion-accordion ${props.rootClassName} `}>
        <div data-role="accordion-container" className="accordion-element">
          <div className="accordion-details">
            <span className="accordion-text">{props.text}</span>
            <span data-role="accordion-content" className="accordion-text1">
              {props.text1}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element1 accordion-element"
        >
          <div className="accordion-details1">
            <span className="accordion-text2">{props.text2}</span>
            <span data-role="accordion-content" className="accordion-text3">
              {props.text3}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon2"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <div
          data-role="accordion-container"
          className="accordion-element2 accordion-element"
        >
          <div className="accordion-details2">
            <span className="accordion-text4">{props.text4}</span>
            <span data-role="accordion-content" className="accordion-text5">
              {props.text5}
            </span>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon"
            className="accordion-icon4"
          >
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .accordion-accordion {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-element {
            width: 640px;
            user-select: none;
          }
          .accordion-details {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text1 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .accordion-element1 {
            width: 640px;
            user-select: none;
          }
          .accordion-details1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text3 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon2 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .accordion-element2 {
            width: 640px;
            user-select: none;
          }
          .accordion-details2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-text4 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 27px;
          }
          .accordion-text5 {
            color: var(--dl-color-gray-900);
            width: 100%;
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
            user-select: text;
          }
          .accordion-icon4 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .accordion-element {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text {
              font-size: 16px;
              line-height: 24px;
            }
            .accordion-element1 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text2 {
              font-size: 16px;
            }
            .accordion-element2 {
              width: 100%;
              max-width: 560px;
            }
            .accordion-text4 {
              font-size: 16px;
            }
          }
          @media (max-width: 479px) {
            .accordion-element {
              width: 350px;
              max-width: auto;
            }
            .accordion-element1 {
              width: 350px;
              max-width: auto;
            }
            .accordion-element2 {
              width: 350px;
              max-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Accordion.defaultProps = {
  text2: 'Nemo enim ipsam voluptatem quia voluptas',
  text1:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text: 'Aliquam quaerat voluptatem',
  text4: 'Magnam aliquam quaerat voluptatem',
  text5:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text3:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  rootClassName: '',
}

Accordion.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion
