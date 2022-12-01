import React from "react"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "./page1.css"

export default function page1() {
  return (
    <div className="w-100" style={{ background: "#52367C", height: "100vh" }}>
      <div className="section" style={{ paddingTop: "30px", height: "100vh" }}>
        <Stack gap={4} style={{ justifyContent: "center !important" }}>
          <img
            src="logo.png"
            alt="Haloed"
            style={{ width: "100px" }}
            className="mx-auto"
          />
          <Form>
            <div className="text-white text-center">
              <h3>Enter Verification code</h3>
              <p>
                please enter the verification code we sent to your registered
                email address john@*****.com
              </p>
            </div>
            <div className="inputs-container">
              <Stack direction="horizontal" gap={4}>
                <Form.Control
                  type="text"
                  placeholder="0"
                  className="otp-input"
                />
                <Form.Control
                  type="text"
                  placeholder="0"
                  className="otp-input"
                />
                <Form.Control
                  type="text"
                  placeholder="0"
                  className="otp-input"
                />
                <Form.Control
                  type="text"
                  placeholder="0"
                  className="otp-input"
                />
              </Stack>
            </div>

            <div className="d-flex justify-content-center">
              <Button
                variant="secondary"
                className="btn-lg my-4  mx-auto w-50 rounded"
                disabled
              >
                Confirm
              </Button>
            </div>
            <div className="text-center w-75 mx-auto text-white">
              <p>Didn't recieve code? please check your spam folder or</p>
              <p></p>
              <a
                href="/"
                className="text-warning"
                style={{ textDecoration: "none" }}
              >
                resend code
              </a>
            </div>
          </Form>
        </Stack>
      </div>
    </div>
  )
}
