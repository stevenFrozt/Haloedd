import React from "react"
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import "./page1.css"

export default function page1() {
  return (
    <div className="w-100" style={{ background: "#52367C", height: "100vh" }}>
      <div className="section" style={{ paddingTop: "30px", height: "100vh" }}>
        <Stack gap={4}>
          <img
            src="logo.png"
            alt="Haloed"
            style={{ width: "100px" }}
            className="mx-auto"
          />
          <Card body>
            <div className="content">
              <h3 className="title">Introduction video</h3>
              <p>
                Before starting the interview, record an optional introduction
                video about yourself to create a candidate profile in Haloed.
              </p>
              <p>
                It will be shared with the company you're interviewing with.
              </p>
              <p>
                Also other Haloed members including other recruiters may see
                your intro video and find your profile base on it. If you take
                any interviews via Haloed in the future, you don't need to
                retake your intro video.
              </p>
              <p>
                Read more{" "}
                <a
                  href="/"
                  style={{ textDecoration: "none", textAlign: "center" }}
                  className="text-warning "
                >
                  here
                </a>{" "}
                how you can use your profile in job search.
              </p>
              <div>
                <Stack gap={3}>
                  <Button variant="warning" className="buttonWarning">
                    Record my intro video
                  </Button>
                  <a
                    href="/"
                    style={{ textDecoration: "none", textAlign: "center" }}
                    className="text-warning "
                  >
                    Take the interview without an intro video
                  </a>
                </Stack>
              </div>
            </div>
          </Card>
        </Stack>
      </div>
    </div>
  )
}
