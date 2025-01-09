import { Link } from "react-router-dom";

function Button () {
    return ( 
        <Link className="link-underline-opacity-0  m-3 btn rounded rounded-pill" style={{backgroundColor: 'white', opacity:'30%', width: '200px'}} to='personality-test'>Llévame al test</Link>
    )
}
export default Button; 