import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bachelor of Science in Computer Science, with great motivation and quick understanding of advanced technologies.
Developed mental flexibility, full orientation to the technological field and a constant desire to enrich professional knowledge.

            <br />
            <br />
            Next professional challenge: Following the completion of my studies for a bachelor's degree and the holding of complex and interesting positions within the IDF, I am interested to find my place in the technological sector (focusing on software development), so that I can realize my skills and abilities in the best possible way.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
