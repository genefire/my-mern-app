import { Link } from "react-router-dom";
const divStyle = {

    width:'1140px',
  };
  
const Header = () =>{
    return (
        <header className="container-fluid  fixed-top p-4 bg-white">           
            <div className="d-flex justify-content-left m-auto" style={divStyle}>
                <Link className="text-decoration-none" to="/">WJS</Link>
            </div>
        </header>
    );
}
export default Header;