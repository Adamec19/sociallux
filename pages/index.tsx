import React from "react";
import Head from "next/head";

import Navbar from "../src/components/navbar";
import Mark from "../src/components/mark";
import Card from "../src/components/card";
import Accordion from "../src/components/accordion";
import Includes from "../src/components/includes";
import Excludes from "../src/components/excludes";
import Review from "../src/components/review";
import Article from "../src/components/article";
import FAQ from "../src/components/faq";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>sociallux</title>
          <meta name="description" content="marketing specialist" />
          <meta property="og:title" content="sociallux" />
          <meta property="og:description" content="marketing specialist" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <section className="home-section">
          <div className="home-hero">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <h1 className="home-heading">
                    The fastest way to make a doctor appointment
                  </h1>
                  <span className="home-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </header>
                <div className="home-buttons">
                  <div className="home-get-started button">
                    <span className="home-text">Get started</span>
                  </div>
                  <div className="home-get-started1 button">
                    <span className="home-text01">View features</span>
                  </div>
                </div>
              </main>
              <div className="home-highlight">
                <div className="home-avatars">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image01 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image02 avatar"
                  />
                </div>
                <label className="home-caption1">
                  Loved by 10,000+ people like you.
                </label>
              </div>
            </div>
            <div className="home-image03">
              <img
                alt="image"
                src="/SectionImages/heroimage-1500h.png"
                className="home-image04"
              />
            </div>
            <div className="home-image05">
              <img
                alt="image"
                src="/SectionImages/heroimage-1500h.png"
                className="home-image06"
              />
            </div>
          </div>
        </section>
        <section className="home-section01">
          <h2 className="home-text02">
            Our doctors and therapists are here, 24/7.
          </h2>
          <div className="home-features">
            <header className="feature feature-active home-feature">
              <h3 className="home-text03">Urgent Care</h3>
              <p className="home-text04">Doloremque laudantium</p>
            </header>
            <header className="feature home-feature1">
              <h3 className="home-text05">Chronic Care</h3>
              <p className="home-text06">Doloremque laudantium</p>
            </header>
            <header className="feature home-feature2">
              <h3 className="home-text07">Mental Health</h3>
              <p className="home-text08">Doloremque laudantium</p>
            </header>
          </div>
          <div className="home-note">
            <div className="home-content1">
              <main className="home-main1">
                <h2 className="home-heading01">
                  Accessing this Medicare benefit is easy
                </h2>
                <p className="home-paragraph">
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae.
                  </span>
                  <br></br>
                </p>
              </main>
              <div className="home-explore-more">
                <p className="home-text14">Explore more -&gt;</p>
              </div>
            </div>
            <div className="home-image07">
              <img
                alt="image"
                src="/SectionImages/group%201490-1200w.png"
                className="home-image08"
              />
            </div>
          </div>
        </section>
        <section className="home-section02">
          <header className="home-header01">
            <h2 className="home-text15">
              Why do you need a mobile medical app?
            </h2>
            <span className="home-text16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </header>
          <section className="home-note1">
            <div className="home-image09">
              <img
                alt="image"
                src="/SectionImages/group%201428-1200w.png"
                className="home-image10"
              />
            </div>
            <div className="home-content2">
              <div className="home-main2">
                <div className="home-caption2">
                  <span className="section-head">Tempor incididunt</span>
                </div>
                <div className="home-heading02">
                  <h2 className="section-heading">
                    We provide compassionate care from start to finish.
                  </h2>
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae.
                  </p>
                </div>
              </div>
              <div className="home-get-started2 button">
                <span className="home-text17">Get started</span>
              </div>
            </div>
          </section>
          <section className="home-note2">
            <div className="home-image11">
              <img
                alt="image"
                src="/SectionImages/group%201449-1200w.png"
                className="home-image12"
              />
            </div>
            <div className="home-content3">
              <main className="home-main3">
                <header className="home-caption3">
                  <span className="home-section04 section-head">
                    Tempor incididunt
                  </span>
                </header>
                <main className="home-heading04">
                  <header className="home-header02">
                    <h2 className="section-heading">
                      Great care, wherever you are
                    </h2>
                    <p className="section-description">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </header>
                  <div className="home-checkmarks">
                    <Mark></Mark>
                    <Mark Label="Quis nostrud exercitation ullamco"></Mark>
                    <Mark Label="Reprehenderit qui in ea voluptate velit"></Mark>
                  </div>
                </main>
              </main>
              <div className="home-get-started3 button">
                <span className="home-text18">Get started</span>
              </div>
            </div>
          </section>
        </section>
        <section className="home-section05">
          <header className="home-header03">
            <header className="home-left">
              <span className="section-head">Tempor incididunt</span>
              <h2 className="section-heading">
                <span>Meet our network</span>
                <br></br>
                <span>of licensed providers</span>
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph3 section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <main className="home-cards">
            <Card rootClassName="card-root-class-name"></Card>
            <Card
              Icon="/Icons/group%201314-200h.png"
              rootClassName="card-root-class-name1"
            ></Card>
            <Card
              Icon="/Icons/group%201317-200h.png"
              rootClassName="card-root-class-name2"
            ></Card>
          </main>
        </section>
        <section className="home-section07">
          <div className="home-note3">
            <div className="home-image13">
              <img
                alt="image"
                src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
                className="home-image14"
              />
            </div>
            <div className="home-content4">
              <div className="home-caption4">
                <span className="section-head">Tempor incididunt</span>
              </div>
              <div className="home-heading07">
                <div className="home-header04">
                  <h2 className="section-heading">
                    Tips to get care, answers and advice faster
                  </h2>
                </div>
                <Accordion rootClassName="accordion-root-class-name"></Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section09">
          <div className="home-cube">
            <div className="home-top side"></div>
            <div className="home-front side"></div>
            <div className="home-left1 side"></div>
          </div>
          <main className="home-banner">
            <div className="home-header05">
              <h2 className="section-heading">
                Planical makes online doctor visits easier
              </h2>
              <p className="home-description section-description">
                Lorem ipsum dolor sit amet!
              </p>
            </div>
            <div className="home-buttons1">
              <div className="home-get-started4 button">
                <span className="home-text22">Get started</span>
              </div>
              <div className="home-book-demo button">
                <span className="home-text23">Book a demo</span>
              </div>
            </div>
          </main>
        </section>
        <section className="home-section10">
          <div className="home-cube1">
            <div className="home-top1 side"></div>
            <div className="home-front1 side"></div>
            <div className="home-left2 side"></div>
          </div>
          <main className="home-pricing">
            <header className="home-header06">
              <header className="home-left3">
                <span className="section-head">Pricing</span>
                <h2 className="section-heading home-heading10">
                  Start small, think big
                </h2>
              </header>
              <div className="home-right1">
                <p className="home-paragraph4 section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </header>
            <div className="home-plans-container">
              <div className="home-switch">
                <div className="switch">
                  <label className="home-text24">Monthly</label>
                </div>
                <div className="home-switch2 switch">
                  <label className="home-text25">Yearly</label>
                </div>
              </div>
              <main className="home-plans">
                <div className="home-plan">
                  <div className="home-details">
                    <div className="home-header07">
                      <label className="home-name">Basic</label>
                      <div className="home-pricing1">
                        <h1 className="home-price">$9</h1>
                        <span className="home-duration">/mo</span>
                      </div>
                    </div>
                    <p className="home-description1">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </div>
                  <div className="home-buy-details">
                    <div className="home-buy button">
                      <span className="home-text26">
                        <span>Start Basic</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="home-features1">
                      <span className="home-heading11">You will get</span>
                      <div className="home-list">
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-plan1">
                  <div className="home-details1">
                    <div className="home-header08">
                      <label className="home-name1">Professional</label>
                      <div className="home-pricing2">
                        <h1 className="home-price1">$15</h1>
                        <span className="home-duration1">/mo</span>
                      </div>
                    </div>
                    <p className="home-description2">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </div>
                  <div className="home-buy-details1">
                    <div className="home-buy1 button">
                      <span className="home-text29">
                        <span>Start Professional</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="home-features2">
                      <span className="home-heading12">You will get</span>
                      <div className="home-list1">
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                        <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-details2">
                    <div className="home-header09">
                      <label className="home-name2">Enterprise</label>
                      <div className="home-pricing3">
                        <span className="home-price2">$99</span>
                        <span className="home-duration2">/mo</span>
                      </div>
                    </div>
                    <p className="home-description3">
                      Good for sed quia consequuntur magni dolores eos qui
                      ratione.
                    </p>
                  </div>
                  <div className="home-buy-details2">
                    <div className="home-buy2 button">
                      <span className="home-text32">
                        <span>Start Enterprise</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="home-features3">
                      <span className="home-heading13">You will get</span>
                      <div className="home-list2">
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                        <Includes rootClassName="includes-root-class-name"></Includes>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
          <div className="home-help">
            <span className="home-text35">
              <span>Need any help?</span>
              <br></br>
            </span>
            <div className="home-contact-support">
              <p className="home-text38">Contact support -&gt;</p>
            </div>
          </div>
        </section>
        <section className="home-section12">
          <header className="home-header10">
            <header className="home-left4">
              <span className="section-head">Tempor incididunt</span>
              <h2 className="home-heading14 section-heading">
                What users say about us
              </h2>
            </header>
            <div className="home-right2">
              <p className="home-paragraph5 section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <main className="home-cards1">
            <div className="home-container1">
              <Review rootClassName="review-root-class-name"></Review>
              <Review
                Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container2">
              <Review
                Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container3">
              <Review
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
          </main>
          <div className="home-view-more">
            <p className="home-text39">View more</p>
          </div>
        </section>
        <section className="home-section14">
          <header className="home-header11">
            <span className="section-head">Articles about us</span>
            <h2 className="home-heading15 section-heading">
              We’re the app on everyone’s lips
            </h2>
          </header>
          <main className="home-cards2">
            <Article rootClassName="article-root-class-name"></Article>
            <Article
              Header="techeu"
              rootClassName="article-root-class-name"
            ></Article>
            <Article
              Header="sifted/"
              rootClassName="article-root-class-name"
            ></Article>
          </main>
        </section>
        <section className="home-section16">
          <header className="home-header12">
            <span className="section-head">FAQ</span>
            <h2 className="home-heading16 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="home-accordion">
            <FAQ rootClassName="faq-root-class-name"></FAQ>
          </main>
        </section>
        <section className="home-section18">
          <main className="home-content5">
            <header className="home-header13">
              <h2 className="home-heading17 section-heading">
                Stop searching online for medications and use Planical app!
              </h2>
              <div className="home-buttons2">
                <div className="home-ios button">
                  <img
                    alt="image"
                    src="/Icons/apple-200w.png"
                    className="home-icon"
                  />
                  <span className="home-text40">Download for iOS</span>
                </div>
                <div className="home-android button">
                  <img
                    alt="image"
                    src="/Icons/android-200h.png"
                    className="home-icon1"
                  />
                  <span className="home-text41">Download for Android</span>
                </div>
              </div>
            </header>
            <img
              alt="image"
              src="/SectionImages/group%201505-1200w.png"
              className="home-image15"
            />
          </main>
        </section>
        <footer className="home-footer">
          <div className="home-content6">
            <main className="home-main-content">
              <div className="home-content7">
                <header className="home-main4">
                  <div className="home-header14">
                    <img
                      alt="image"
                      src="/Branding/planical7012-ttpb.svg"
                      className="home-branding"
                    />
                    <span className="home-text42">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link"
                    >
                      <img
                        alt="image"
                        src="/Icons/linkedin-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link1"
                    >
                      <img
                        alt="image"
                        src="/Icons/instagram-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link2"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header15">
                      <span className="footer-header">Solutions</span>
                    </div>
                    <div className="home-links">
                      <span className="footer-link">Responsive Web Design</span>
                      <span className="footer-link">Responsive Prototypes</span>
                      <span className="footer-link">Design to Code</span>
                      <span className="footer-link">
                        Static Website Builder
                      </span>
                      <span className="footer-link">
                        Static Website Generator
                      </span>
                    </div>
                  </div>
                  <div className="home-category1">
                    <div className="home-header16">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="home-links1">
                      <span className="footer-link">About</span>
                      <span className="footer-link">Team</span>
                      <span className="footer-link">News</span>
                      <span className="footer-link">Partners</span>
                      <span className="footer-link">Careers</span>
                      <span className="footer-link">Press &amp; Media</span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text56">
                  © 2022 latitude. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main5">
                <h1 className="home-heading18">Subscribe to our newsletter</h1>
                <div className="home-input-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="home-textinput input"
                  />
                  <div className="home-buy3 button">
                    <span className="home-text57">-&gt;</span>
                    <span className="home-text58">
                      <span>Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </main>
              <h1 className="home-notice">
                By subscribing to our newsletter you agree with our Terms and
                Conditions.
              </h1>
            </main>
            <section className="home-copyright1">
              <span className="home-text61">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-section {
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-get-started {
            display: flex;
            background-color: #80ff44;
          }
          .home-text {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-get-started1 {
            background-color: #2a2a2a;
          }
          .home-text01 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            left: 0px;
            position: absolute;
          }
          .home-image01 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
          }
          .home-image02 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
          }
          .home-caption1 {
            color: rgb(255, 255, 255);
            font-family: Poppins;
            line-height: 24px;
          }
          .home-image03 {
            top: 150px;
            right: 0px;
            width: 650px;
            height: 900px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image04 {
            top: 0px;
            right: 0px;
            width: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-image05 {
            display: none;
          }
          .home-section01 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-text02 {
            color: #ffffff;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            user-select: none;
            border-color: #5a5a5a;
            margin-bottom: 120px;
            flex-direction: row;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-text03 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text04 {
            color: rgb(121, 124, 128);
            font-family: Poppins;
          }
          .home-text05 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text06 {
            color: rgb(121, 124, 128);
            font-family: Poppins;
          }
          .home-text07 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text08 {
            color: rgb(121, 124, 128);
            font-family: Poppins;
          }
          .home-note {
            gap: 140px;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 520px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading01 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-paragraph {
            color: #cccccc;
            font-family: Poppins;
            line-height: 28px;
          }
          .home-explore-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-explore-more:hover {
            opacity: 0.5;
          }
          .home-text14 {
            color: #80ff44;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-image07 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-image08 {
            object-fit: cover;
          }
          .home-section02 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header01 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text16 {
            color: #c2c6cc;
            width: 100%;
            max-width: 600px;
            text-align: center;
            font-family: Poppins;
            line-height: 28px;
          }
          .home-note1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image09 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            object-fit: cover;
          }
          .home-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading02 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-get-started2 {
            display: flex;
            background-color: #80ff44;
          }
          .home-text17 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-note2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image11 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image12 {
            object-fit: cover;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section04 {
            color: rgb(198, 255, 75);
          }
          .home-heading04 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-checkmarks {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-get-started3 {
            display: flex;
            background-color: #80ff44;
          }
          .home-text18 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section05 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header03 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-right {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph3 {
            width: 100%;
            max-width: 480px;
          }
          .home-cards {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section07 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-note3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image13 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image14 {
            object-fit: cover;
          }
          .home-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading07 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-section09 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube {
            top: 20px;
            left: 0px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(25deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top {
            transform: translateZ(-120px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left1 {
            width: 120px;
            transform: translateZ(-120px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            justify-content: space-between;
            background-color: #292929;
          }
          .home-header05 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-description {
            font-size: 20px;
            line-height: 30px;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-get-started4 {
            display: flex;
            background-color: #80ff44;
          }
          .home-text22 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-book-demo {
            display: flex;
            background-color: #ffffff;
          }
          .home-text23 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-section10 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube1 {
            right: -150px;
            width: 210px;
            bottom: -80px;
            height: 210px;
            margin: auto;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(50deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top1 {
            transform: translateZ(-210px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front1 {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left2 {
            width: 210px;
            transform: translateZ(-210px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-pricing {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header06 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph4 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            line-height: 32px;
          }
          .home-plans-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-switch {
            gap: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .home-text24 {
            color: #ffffff;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-switch2 {
            padding-top: var(--dl-space-space-unit);
            background-color: #80ff44;
          }
          .home-text25 {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-plans {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
          }
          .home-plan {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price {
            color: #ffffff;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-duration {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description1 {
            color: rgba(255, 255, 255, 0.8);
            font-family: Poppins;
            line-height: 22px;
          }
          .home-buy-details {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-buy {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .home-text26 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading11 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price1 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-duration1 {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            font-family: Poppins;
            line-height: 22px;
          }
          .home-buy-details1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-buy1 {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .home-text29 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading12 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price2 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-duration2 {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description3 {
            color: rgba(255, 255, 255, 0.8);
            font-family: Poppins;
            line-height: 22px;
          }
          .home-buy-details2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-buy2 {
            width: 100%;
            display: flex;
            background-color: #80ff44;
          }
          .home-text32 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading13 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-help {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text35 {
            color: #ffffff;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-contact-support {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-contact-support:hover {
            opacity: 0.5;
          }
          .home-text38 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section12 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header10 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading14 {
            text-align: center;
          }
          .home-right2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph5 {
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto auto;
          }
          .home-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-view-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-view-more:hover {
            opacity: 0.5;
          }
          .home-text39 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section14 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading15 {
            text-align: center;
          }
          .home-cards2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section16 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header12 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading16 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section18 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #292929;
          }
          .home-content5 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-header13 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-heading17 {
            text-align: left;
          }
          .home-buttons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-ios {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            background-color: #0f0f0f;
          }
          .home-icon {
            width: 16px;
            object-fit: cover;
          }
          .home-text40 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            background-color: #0f0f0f;
          }
          .home-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .home-text41 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-image15 {
            right: 0px;
            width: 470px;
            bottom: 0px;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-content6 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-branding {
            width: 120px;
            object-fit: cover;
          }
          .home-text42 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link {
            display: contents;
          }
          .home-link1 {
            display: contents;
          }
          .home-link2 {
            display: contents;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text56 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            max-width: 275px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 30px;
          }
          .home-input-field {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: #292929;
          }
          .home-textinput {
            flex: 1;
            color: #ffffff;
            height: 24px;
            line-height: 24px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            outline-style: none;
            background-color: rgba(217, 217, 217, 0);
          }
          .home-buy3 {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #80ff44;
          }
          .home-text57 {
            color: rgb(12, 16, 12);
            display: none;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text58 {
            color: rgb(12, 16, 12);
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-notice {
            color: #686868;
            font-size: 14px;
            max-width: 400px;
            font-style: normal;
            text-align: left;
            font-weight: 400;
            line-height: 21px;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text61 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .home-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content {
              position: relative;
              align-items: center;
            }
            .home-main {
              align-items: center;
            }
            .home-heading {
              text-align: left;
            }
            .home-caption {
              text-align: left;
            }
            .home-buttons {
              width: 100%;
            }
            .home-get-started {
              flex: 1;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-highlight {
              width: 100%;
              flex-direction: column;
            }
            .home-image03 {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .home-image05 {
              width: 100%;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .home-image06 {
              width: 600px;
            }
            .home-text02 {
              text-align: center;
            }
            .home-note {
              gap: var(--dl-space-space-fourunits);
              flex-direction: column;
            }
            .home-content1 {
              max-width: 100%;
            }
            .home-main1 {
              align-items: flex-start;
            }
            .home-text15 {
              text-align: center;
            }
            .home-section05 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-header03 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section07 {
              padding-top: 0px;
            }
            .home-note3 {
              flex-direction: column-reverse;
            }
            .home-banner {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-get-started4 {
              width: 100%;
            }
            .home-book-demo {
              width: 100%;
            }
            .home-plans {
              flex-direction: column;
            }
            .home-section12 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards1 {
              grid-template-columns: auto;
            }
            .home-container3 {
              display: none;
            }
            .home-view-more {
              display: flex;
              border-color: #cccccc;
            }
            .home-text39 {
              color: #cccccc;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
            }
            .home-cards2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-content5 {
              align-items: center;
              flex-direction: column;
            }
            .home-buttons2 {
              width: 100%;
            }
            .home-ios {
              flex: 1;
              justify-content: center;
            }
            .home-android {
              flex: 1;
              justify-content: center;
            }
            .home-image15 {
              position: static;
            }
            .home-content6 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright {
              display: none;
            }
            .home-copyright1 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-content {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading {
              font-size: 40px;
            }
            .home-caption {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-get-started1 {
              display: none;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image06 {
              width: 500px;
            }
            .home-section01 {
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-text02 {
              font-size: 32px;
              text-align: center;
            }
            .home-features {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-top: var(--dl-space-space-threeunits);
              border-color: #5a5a5a;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-feature {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text03 {
              font-size: 20px;
            }
            .home-feature1 {
              width: 100%;
              border-color: #5a5a5a;
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 1px;
            }
            .home-text05 {
              font-size: 20px;
            }
            .home-feature2 {
              width: 100%;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text07 {
              font-size: 20px;
            }
            .home-note {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-heading01 {
              font-size: 28px;
            }
            .home-paragraph {
              line-height: 24px;
            }
            .home-section02 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text15 {
              font-size: 32px;
              text-align: center;
            }
            .home-note1 {
              flex-direction: column-reverse;
            }
            .home-note2 {
              flex-direction: column-reverse;
            }
            .home-left {
              gap: var(--dl-space-space-unit);
            }
            .home-content4 {
              width: 100%;
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-cube1 {
              right: -250px;
            }
            .home-plan {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-help {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-section12 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-cards2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section18 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-header13 {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-buttons2 {
              flex-direction: column;
            }
            .home-ios {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-content7 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main4 {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text58 {
              color: rgb(12, 16, 12);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              align-items: flex-start;
            }
            .home-heading {
              max-width: 280px;
            }
            .home-image06 {
              width: 400px;
            }
            .home-image08 {
              width: 100%;
            }
            .home-pricing {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading10 {
              font-size: 32px;
              text-align: center;
            }
            .home-paragraph4 {
              font-size: 16px;
            }
            .home-image15 {
              width: 100%;
            }
            .home-textinput {
              flex: 1;
            }
            .home-text57 {
              color: rgb(12, 16, 12);
              display: flex;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
              white-space: nowrap;
            }
            .home-text58 {
              color: rgb(12, 16, 12);
              display: none;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
