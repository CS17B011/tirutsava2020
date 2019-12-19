import React from "react";
import {
  MDBFreeBird,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBEdgeHeader
} from "mdbreact";
import "./query.css";
const EdgeHeaderPage = props => {
  return (
    <MDBContainer fluid className="mt-3">
      <MDBEdgeHeader
        style={{
          backgroundImage:
            "url('https://steemitimages.com/DQmPfGvYUqg9TUsaK8EUegqL2gVGR8FSS67FtYRs86UfUP1/help-and-support.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      ></MDBEdgeHeader>
      <MDBFreeBird>
        <MDBRow>
          <MDBCol
            md="8"
            lg="7"
            className="mx-auto float-none white z-depth-1 py-2 px-2"
          >
            <MDBCardBody>
              <MDBCardTitle>Write Us</MDBCardTitle>
              <p className="pb-4">Submit Your Problem Here</p>
              <form>
                <MDBInput label="Your name" group type="text" icon="user" />
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  icon="envelope"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Textarea"
                  icon="pencil-alt"
                />
                <div className="buttons">
                  {" "}
                  <button className="btn-hover color-1">HERE</button>
                </div>
              </form>
              <div className="my-2">
                <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>
                  Never submit your passwords here
                </p>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    </MDBContainer>
  );
};

export default EdgeHeaderPage;
