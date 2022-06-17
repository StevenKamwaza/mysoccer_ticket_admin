


import { useLocation,useNavigate} from "react-router-dom";

export default function Home(){
    //getting email
    //const email = use
    const email = useLocation().state.userEmail;
    return(
        <h1>{email}</h1>
    )
}