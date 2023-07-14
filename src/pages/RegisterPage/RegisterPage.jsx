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

export const RegisterPage = () => {
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
                <Input id="username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <Button outline color="primary">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
