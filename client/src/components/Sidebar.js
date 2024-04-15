import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return (
        
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <NavLink className="nav-link" to="/admin" end activeStyle="active">
                <FontAwesomeIcon icon={faHouse} /> <span className='ms-3'>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/admin/participants" end activeStyle="active">  <FontAwesomeIcon icon={faUsers} /> <span className='ms-3'>Participants</span></NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/admin/members" end activeStyle="active"> <FontAwesomeIcon icon={faPeopleRoof} /> <span className='ms-3'>Members</span></NavLink>
            </li>
        </ul>                       
               
    );
}

export default Sidebar;