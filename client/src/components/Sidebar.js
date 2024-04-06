import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return (
        
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <NavLink className="nav-link" to="/admin" end activeStyle="active">
                <FontAwesomeIcon icon={faHouse} /> Home
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/admin/participants" end activeStyle="active">Participants</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/admin/members" end activeStyle="active">Member</NavLink>
            </li>
        </ul>                       
               
    );
}
export default Sidebar;