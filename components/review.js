import React from 'react'

import PropTypes from 'prop-types'

const Review = (props) => {
  return (
    <>
      <section className={`review-card ${props.rootClassName} `}>
        <div className="review-stars">
          <svg viewBox="0 0 1024 1024" className="review-icon">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon02">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon04">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon06">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-icon08">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <main className="review-content">
          <p className="review-quote">{props.Quote}</p>
          <div className="review-author">
            <img
              alt={props.AvatarAlt}
              src={props.AvatarSrc}
              className="review-avatar"
            />
            <div className="review-details">
              <h1 className="review-author1">{props.Author}</h1>
              <label className="review-position">{props.Position}</label>
            </div>
          </div>
        </main>
      </section>
      <style jsx>
        {`
          .review-card {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .review-stars {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .review-icon {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon02 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon04 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon06 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-icon08 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-quote {
            color: #cccccc;
            font-size: 18px;
            font-family: Poppins;
            line-height: 25px;
          }
          .review-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .review-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
          }
          .review-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .review-author1 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .review-position {
            color: #cccccc;
            font-size: 14px;
            font-family: Poppins;
            line-height: 20px;
          }

          @media (max-width: 991px) {
            .review-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Review.defaultProps = {
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
  Author: 'Sima Mosbacher',
  rootClassName: '',
  AvatarSrc:
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200',
  Position: 'Manager',
  AvatarAlt: 'image',
}

Review.propTypes = {
  Quote: PropTypes.string,
  Author: PropTypes.string,
  rootClassName: PropTypes.string,
  AvatarSrc: PropTypes.string,
  Position: PropTypes.string,
  AvatarAlt: PropTypes.string,
}

export default Review
