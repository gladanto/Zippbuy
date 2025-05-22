import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BiMap, BiPhone, BiEnvelope, BiMobile} from "react-icons/bi";
import "./Contact.scss"; // Import custom styles

const Contact = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
        <Row className="justify-content-center">
          {/* Location Card */}
          <Col md={5} className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 p-4 text-center">
              <div className="icon-box mx-auto mb-3">
                <BiMap
                  className="icon"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=NO.+1,+OLD+NO.+12+NEW,+1,+Demonte+St,+Pattinapakkam,+Santhome,+Chennai,+Tamil+Nadu+600004",
                      "_blank"
                    )
                  }
                />
              </div>
              <h5 className="fw-bold">Our Location</h5>
              <p className="small">
                <a
                  href="https://www.google.com/maps?q=NO.+1,+OLD+NO.+12+NEW,+1,+Demonte+St,+Pattinapakkam,+Santhome,+Chennai,+Tamil+Nadu+600004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  NO. 1, OLD NO. 12 NEW, 1, Demonte St, Pattinapakkam, Santhome, Chennai, Tamil Nadu 600004
                </a>
              </p>
            </Card>
          </Col>

          {/* Contact Card */}
          <Col md={5} className="mb-4">
            <Card className="shadow-lg border-0 rounded-3 p-4 text-center">
              <div className="icon-box mx-auto mb-3">
                <BiPhone
                  className="icon"
                  onClick={() => (window.location.href = "tel:+914424460444")}
                />
                </div>
              <h5 className="fw-bold">Contact Us</h5>
              <p className="small">
                <a href="tel:+914424460444" className="text-decoration-none text-dark">
                  +91-44-2446 0444
                </a>
              </p>
              <p className="small">
                <a href="tel:+91-9790865554" className="text-decoration-none text-dark">
                  +91-9790865554
                </a>
              </p>
              <p className="small">
                <BiEnvelope />{" "}
                <a href="mailto:info@zippbay.com" className="text-decoration-none">
                  info@zippbay.com
                </a>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
