import { Link } from "react-router-dom";

function Button ({ style }) {
    return ( 
        <Link className="link-light link-underline-opacity-0  m-3 btn btn-info btn-lg rounded rounded-pill" to='personality-test'>Personality Test</Link>
    )
}
export default Button; 