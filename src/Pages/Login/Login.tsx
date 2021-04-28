import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "../../Components/LoginCard/LoginCard";
import "./Login.scss";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col className="center-card">
          <LoginCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
