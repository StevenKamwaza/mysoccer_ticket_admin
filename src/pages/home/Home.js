
import { Container, Row,Col,Form,Button,Table  } from "react-bootstrap";
import { useLocation,useNavigate} from "react-router-dom";
import Graphs from "../charts/Graphs";
import Header from "./Header"

export default function Home(){
    const navigate  = useNavigate();
    //getting email
    const email = useLocation().state.userEmail;
   //redirrect to login page
   if(email === null){
    navigate("/");
   }
   const addNewGame = ()=>{
    console.log("New game added")
   }

    return(
        <div>
            <Header email = {email}/>
            <Container>
                <Row>
                    <Col sm={5} className ="  p-2 mt-2 mb-3">
                        <h4 className="text-center">Add a New Game</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="teams">
                                <Form.Label>Teams</Form.Label>
                                <Form.Control type="text" placeholder="Enter Teams to play" />
                                <Form.Text className="text-muted">
                                    Both teams..eg.. Team A vs Team B.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Date of Match</Form.Label>
                                <Form.Control type="date" placeholder="Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Ed 2000" />
                            </Form.Group>
                           
                            <Button variant="primary" className="mx-auto d-block" onClick={addNewGame}>
                                Add New Game
                            </Button>
                        </Form>

                    </Col>

                    <Col sm className ="card-header">
                        <Graphs/>
                    </Col>

                </Row>
                <Row>
                    <Col sm className="card">
                        <h4 className="mt-3 card-header text-justify text-center">All Games Fixture</h4>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Teams</th>
                                    <th>Date</th>
                                    <th>Venue</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mtopwa FC vs Bullets FC</td>
                                    <td>22/06/2022</td>
                                    <td>Civo Stadium</td>
                                    <td><Button>Edit</Button></td>
                                    <td><Button className="bg-danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Noma FC vs Kalonga FC </td>
                                    <td>21/06/2022</td>
                                    <td>Mzuzu Stadium</td>
                                    <td><Button>Edit</Button></td>
                                    <td><Button className="bg-danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Kamuzu Barracks FC vs AirWing FC</td>
                                    <td>24/06/2022</td>
                                    <td>Kamuzu Stadium</td>
                                    <td><Button>Edit</Button></td>
                                    <td><Button className="bg-danger">Delete</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}