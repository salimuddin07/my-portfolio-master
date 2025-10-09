import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Core Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 text-center">My Favorite Tools and Technologies</h3>
            <div className="tech-stack-carousel-container">
              {/* First Row - Sliding Right */}
              <div className="tech-carousel-row tech-carousel-right">
                <div className="tech-carousel-track">
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML5" />
                    <span>HTML</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
                    <span>CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="48" height="48" />
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="48" height="48" />
                    <span>JavaScript</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="48" height="48" />
                    <span>TypeScript</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" width="48" height="48" />
                    <span>MySQL</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS" width="48" height="48" />
                    <span>AWS</span>
                  </div>
                  {/* Duplicate for infinite effect */}
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML5" />
                    <span>HTML</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
                    <span>CSS</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="48" height="48" />
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="48" height="48" />
                    <span>JavaScript</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="48" height="48" />
                    <span>TypeScript</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" width="48" height="48" />
                    <span>MySQL</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS" width="48" height="48" />
                    <span>AWS</span>
                  </div>
                </div>
              </div>

              {/* Second Row - Sliding Left */}
              <div className="tech-carousel-row tech-carousel-left">
                <div className="tech-carousel-track">
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="GitHub" width="48" height="48" />
                    <span>GitHub</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://cdn-icons-png.flaticon.com/128/15466/15466163.png" width="48" height="48" alt="Git" />
                    <span>Git</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=bootstrap" width="48" height="48" alt="Bootstrap" />
                    <span>Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
                    <span>Tailwind</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=jquery" width="48" height="48" alt="jQuery" />
                    <span>jQuery</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="MongoDB" />
                    <span>MongoDB</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
                    <span>Node.js</span>
                  </div>
                  {/* Duplicate for infinite effect */}
                  <div className="tech-item">
                    <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="GitHub" width="48" height="48" />
                    <span>GitHub</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://cdn-icons-png.flaticon.com/128/15466/15466163.png" width="48" height="48" alt="Git" />
                    <span>Git</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=bootstrap" width="48" height="48" alt="Bootstrap" />
                    <span>Bootstrap</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
                    <span>Tailwind</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=jquery" width="48" height="48" alt="jQuery" />
                    <span>jQuery</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="MongoDB" />
                    <span>MongoDB</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
                    <span>Node.js</span>
                  </div>
                </div>
              </div>

              {/* Third Row - Sliding Right */}
              <div className="tech-carousel-row tech-carousel-right">
                <div className="tech-carousel-track">
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=php" width="48" height="48" alt="PHP" />
                    <span>PHP</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=vscode" width="48" height="48" alt="VS Code" />
                    <span>VS Code</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=wordpress" width="48" height="48" alt="WordPress" />
                    <span>WordPress</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=sass" width="48" height="48" alt="Sass" />
                    <span>Sass</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=postgres" width="48" height="48" alt="PostgreSQL" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/apify-logo/logomark-32x32.svg" alt="Apify" width="48" height="48" />
                    <span>Apify</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/puppeteer.svg" alt="Puppeteer" width="48" height="48" />
                    <span>Puppeteer</span>
                  </div>
                  {/* Duplicate for infinite effect */}
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=php" width="48" height="48" alt="PHP" />
                    <span>PHP</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=vscode" width="48" height="48" alt="VS Code" />
                    <span>VS Code</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=wordpress" width="48" height="48" alt="WordPress" />
                    <span>WordPress</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=sass" width="48" height="48" alt="Sass" />
                    <span>Sass</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=postgres" width="48" height="48" alt="PostgreSQL" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/apify-logo/logomark-32x32.svg" alt="Apify" width="48" height="48" />
                    <span>Apify</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/puppeteer.svg" alt="Puppeteer" width="48" height="48" />
                    <span>Puppeteer</span>
                  </div>
                </div>
              </div>

              {/* Fourth Row - Sliding Left */}
              <div className="tech-carousel-row tech-carousel-left">
                <div className="tech-carousel-track">
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/playwright.svg" alt="Playwright" width="48" height="48" />
                    <span>Playwright</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/cheerio.svg" alt="Cheerio" width="48" height="48" />
                    <span>Cheerio</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/axios.svg" alt="Axios" width="48" height="48" />
                    <span>Axios</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://docs.n8n.io/_images/n8n-docs-icon.svg" alt="n8n" width="48" height="48" />
                    <span>n8n</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=python" width="48" height="48" alt="Python" />
                    <span>Python</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=docker" width="48" height="48" alt="Docker" />
                    <span>Docker</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=figma" width="48" height="48" alt="Figma" />
                    <span>Figma</span>
                  </div>
                  {/* Duplicate for infinite effect */}
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/playwright.svg" alt="Playwright" width="48" height="48" />
                    <span>Playwright</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/cheerio.svg" alt="Cheerio" width="48" height="48" />
                    <span>Cheerio</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://apify.com/img/template-icons/axios.svg" alt="Axios" width="48" height="48" />
                    <span>Axios</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://docs.n8n.io/_images/n8n-docs-icon.svg" alt="n8n" width="48" height="48" />
                    <span>n8n</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=python" width="48" height="48" alt="Python" />
                    <span>Python</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=docker" width="48" height="48" alt="Docker" />
                    <span>Docker</span>
                  </div>
                  <div className="tech-item">
                    <img src="https://skillicons.dev/icons?i=figma" width="48" height="48" alt="Figma" />
                    <span>Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 text-center">Professional Achievements</h3>
            <Row className="achievements-grid">
              <Col md="3" className="text-center mb-4">
                <div className="achievement-item">
                  <h2 className="achievement-number">50+</h2>
                  <p>Web Scrapers Deployed</p>
                </div>
              </Col>
              <Col md="3" className="text-center mb-4">
                <div className="achievement-item">
                  <h2 className="achievement-number">30+</h2>
                  <p>Automation Tools Created</p>
                </div>
              </Col>
              <Col md="3" className="text-center mb-4">
                <div className="achievement-item">
                  <h2 className="achievement-number">100+</h2>
                  <p>Projects Completed</p>
                </div>
              </Col>
              <Col md="3" className="text-center mb-4">
                <div className="achievement-item">
                  <h2 className="achievement-number">50+</h2>
                  <p>Happy Clients</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
