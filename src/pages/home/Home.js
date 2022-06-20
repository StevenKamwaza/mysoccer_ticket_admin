


import { Container, Row,Col } from "react-bootstrap";
import { useLocation,useNavigate} from "react-router-dom";
import Header from "./Header"
export default function Home(){
    const navigate  = useNavigate();
    //getting email
    const email = useLocation().state.userEmail;
   //redirrect to login page
   if(email === null){
    navigate("/");
   }

    return(
        <div>
            <Header email = {email}/>
            <Container>
                <Row>
                    <Col sm={8}>Cards to add</Col>
                    <Col sm={4}>Graphs of al tickets</Col>
                </Row>
                <Row>
                    <Col sm>card to edit</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
                <Row>
                    <Col sm>
                        table of games here
                    </Col>
                </Row>
            </Container>
        </div>
    )
}