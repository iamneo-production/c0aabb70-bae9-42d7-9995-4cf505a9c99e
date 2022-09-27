import {Login} from "./pages/Login";
import React,{component} from "react"
import { Form, Col, Button } from "react-bootstrap";
class App extends component {
  render() {ech
    return (
      	<Form>
	        <Form.Row>
		        <Col>
		            <Form.Control type="email" placeholder="Enter email" />
		        </Col>

		        <Col>
		            <Form.Control type="password" placeholder="Enter password" />
		        </Col>

		        <Col>
		            <button>Submit</button>
		        </Col>
	        </Form.Row>
      	</Form>
    );
  }
}

export default App;
