import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="User administration"
              description="web application for managing user information. Developed using React JS & data source REST API."
              link="https://github.com/YochaiMorYosef/User-administration"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movies data management system"
              description="web application for movie information management. Developed using Node JS, JSON File & Web Service."
              link="https://github.com/YochaiMorYosef/Movies-data-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tic Tac Toe game"
              description="web game designed for two players (developed using JavaScript)."
              link="https://github.com/YochaiMorYosef/Tic-Tac-Toe-game"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
