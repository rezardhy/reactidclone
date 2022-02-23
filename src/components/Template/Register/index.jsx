import { Form, Button } from "react-bootstrap"
import './index.css'

function register() {
    return(
        <div className="content">
            <h1>Registrasi</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Input Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Input your email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Input Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Input your name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Input Your Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Input your phone number" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Input your Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default register;