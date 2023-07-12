import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./RegisterPage.css";
import { useState } from "react";
import { axiosClient } from "src/axios/AxiosClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleDataChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleRegisterSubmited = async () => {
    if (formData.confirmPassword !== formData.password) {
      toast.error("Confirm password does not match");
      return;
    }
    const { err } = await axiosClient.post("/accounts", formData);
    if (err) {
      toast.error("Register account fail");
    } else {
      toast.success("Register account success");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };
  return (
    <main className="register-page">
      <Container>
        <Row>
          <Col lg="6" className="register-page__left">
            <h3>New to our website?</h3>
            <div>
              There are advances being made in science and technology everyday,
              and a good example of this is the Create an Account
            </div>
            <button>Create an Account</button>
          </Col>
          <Col lg="6" className="register-page__right">
            <h3>LOG IN TO ENTER</h3>
            <Form>
              <FormGroup>
                <Label htmlFor="Username">Username</Label>
                <Input
                  id="username"
                  placeholder="Username"
                  onChange={(e) => {
                    handleDataChange("username", e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => {
                    handleDataChange("email", e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    handleDataChange("password", e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    handleDataChange("confirmPassword", e.target.value);
                  }}
                />
              </FormGroup>
              <Button onClick={handleRegisterSubmited} outline color="primary">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
