import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

export default function Signup() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.authenticate === true) {
      navigate("/");
    }
  });
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row style={{ marginTop: "50px" }}>
                <Col md={6}>
                  <Input
                    label={"First Name"}
                    placeholder={"First Name"}
                    value=""
                    type={"text"}
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label={"Last Name"}
                    placeholder={"Last Name"}
                    value=""
                    type={"text"}
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label={"Email address"}
                placeholder={"Enter your Email address"}
                value=""
                type={"email"}
                onChange={() => {}}
              />

              <Input
                label={"Password"}
                placeholder={"Password"}
                value=""
                type={"password"}
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}