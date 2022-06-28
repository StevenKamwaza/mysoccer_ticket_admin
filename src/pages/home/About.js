import React from "react";
import Header from "./Header";
import { Container, Row,Col,Button  } from "react-bootstrap";
import { useLocation,useNavigate} from "react-router-dom";
import Typography from '@mui/material/Typography';

function About() {
  return (
    <div>
      <Header/>
      
      <Container>
        <Row>
          <h1 className="m-2 text-center">About Us</h1>
        </Row>
        <Row>
          <Typography>

          </Typography>
        </Row>
      </Container>
    </div>
  )
}

export default About;
