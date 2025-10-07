import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Featured Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="lead">
              Showcasing expertise in AI automation, web scraping, and full-stack development with 50+ successful projects completed.
            </p>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.title} />
                <div className="content">
                  <h4>{data.title}</h4>
                  <span className="project-category">{data.category}</span>
                  <p>{data.description}</p>
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong> {data.tech}
                  </div>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="portfolio-stats mt-5">
          <Row>
            <Col md="3" className="text-center">
              <h3 className="stat-number">100+</h3>
              <p>Projects Completed</p>
            </Col>
            <Col md="3" className="text-center">
              <h3 className="stat-number">50+</h3>
              <p>Web Scrapers Deployed</p>
            </Col>
            <Col md="3" className="text-center">
              <h3 className="stat-number">30+</h3>
              <p>Automation Tools</p>
            </Col>
            <Col md="3" className="text-center">
              <h3 className="stat-number">50+</h3>
              <p>Happy Clients</p>
            </Col>
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};
