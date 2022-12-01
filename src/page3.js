import React from "react"
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "./page1.css"

export default function page1() {
  return (
    <div className="w-100" style={{ background: "#52367C" }}>
      <div className="section" style={{ paddingTop: "30px" }}>
        <Stack gap={4}>
          <img
            src="logo.png"
            alt="Haloed"
            style={{ width: "100px" }}
            className="mx-auto"
          />
          <h3 className="text-center text-white">Video interview</h3>
          <h5 className="text-center text-white">Marketing Associate</h5>
          <h6 className="text-center text-white">Truffle Technologies</h6>

          <p className="text-center text-white">
            Please register with your email before continuing to the interview.
          </p>

          <Form>
            <Form.Group controlId="firstname" className="mb-3">
              <Form.Label className="text-white">First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
              <p className="text-danger ">oops Error something went wrong!</p>
            </Form.Group>
            <Form.Group controlId="lastname" className="mb-3">
              <Form.Label className="text-white">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
              <p className="text-danger ">oops Error something went wrong!</p>
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="text-white">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Last name" />
              <p className="text-danger ">oops Error something went wrong!</p>
            </Form.Group>
            <Form.Group controlId="number" className="mb-3">
              <Form.Label className="text-white">Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile Number (with country code e.g +65)"
              />
              <p className="text-danger ">oops Error something went wrong!</p>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password]" placeholder="Password" />
              <p className="text-danger ">oops Error something went wrong!</p>
            </Form.Group>
            <p className="text-white">
              By clicking 'Register', you agree to our
              <a href="/" className="text-warning text-decoration-none">
                {" "}
                Terms{" "}
              </a>
              and{" "}
              <a href="/" className="text-warning text-decoration-none">
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              . Your email address and mobile number are shared with the
              recruiter to contact you later.
            </p>
            <Button
              variant="warning"
              className="w-100 mb-5 rounded"
              style={{ borderRadius: "60px !important" }}
            >
              Register
            </Button>
          </Form>
        </Stack>
      </div>
    </div>
  )
}
