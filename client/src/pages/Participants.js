import face from '../assets/images/face1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';

const Participants = () =>{
  return (
    <>       
      <div className='row flex-row pb-4 mt-3 align-items-left justify-content-between'>
        <h4 className='w-25'>Participants</h4>

        <Link className="btn btn-primary w-25" to="/admin/participants/addParticipants">Add Participant</Link>       
        <hr className='mt-3' />
      </div>
      <div className='row'>
      <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-font-size">
                  <thead>
                    <tr>
                      <th scope="col"> Name </th>
                      <th scope="col"> Address </th>
                      <th scope="col"> Contact Number </th>
                      <th scope="col"> Status </th>
                      <th scope="col"> Modified By</th>
                      <th scope="col"> Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td> <img src={face} className="me-2" alt="image1" /> David Grey </td>
                        <td>  No. 333 Antonio Street corner Burgos Avenue </td>
                        <td> +6391234567123  </td>
                        <td> <label className="badge badge bg-primary">DONE</label> </td>
                        <td> January 1, 2000 </td>
                        <td>  <FontAwesomeIcon icon={faPenToSquare} />  <FontAwesomeIcon icon={faPrint} /></td>
                    </tr>
                    <tr>
                        <td> <img src={face} className="me-2" alt="image1" /> David Grey </td>
                        <td>  No. 333 Antonio Street corner Burgos Avenue </td>
                        <td> +6391234567123  </td>
                        <td> <label className="badge badge bg-primary">DONE</label> </td>
                        <td> January 1, 2000 </td>
                        <td>  <FontAwesomeIcon icon={faPenToSquare} />  <FontAwesomeIcon icon={faPrint} /></td>
                    </tr>
                    <tr>
                        <td><img src={face} className="me-2" alt="image1" /> David Grey </td>
                        <td>  No. 333 Antonio Street corner Burgos Avenue </td>
                        <td> +6391234567123  </td>
                        <td> <label className="badge badge bg-primary">DONE</label> </td>
                        <td> January 1, 2000 </td>
                        <td>  <FontAwesomeIcon icon={faPenToSquare} />  <FontAwesomeIcon icon={faPrint} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
   
    </>
);
}
export default Participants;