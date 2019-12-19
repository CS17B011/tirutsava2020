import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon
} from "mdbreact";

export default function Head() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol md="6" className="mb-4">
          <MDBCard color="indigo" text="white" className="text-center">
            <MDBCardBody>
              <h2>Sponsership Head</h2>
              <p style={{ fontWeight: "bold" }}>Mr.XYZ</p>
              <MDBIcon icon="phone-alt" /> +91XXXXXXXXX
              <br />
              <MDBIcon icon="at" /> Xyz@gmail.com
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard color="red lighten-1" text="white" className="text-center">
            <MDBCardBody>
              <h2>Marketing Head</h2>
              <p style={{ fontWeight: "bold" }}>Mr.XYZ</p>
              <MDBIcon icon="phone-alt" /> +91XXXXXXXXX
              <br />
              <MDBIcon icon="at" /> Xyz@gmail.com
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
