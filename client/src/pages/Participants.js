import face from '../assets/images/face1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Participants = () =>{
    return (
        <>
        <div className="d-flex justify-content-evenly">
          
                <div className="card col-sm-4 m-1">
                    <div className="card-body">
                        <h5 className="card-title">Add Participants</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <div className="card col-sm-4 m-1" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
                <div className="card col-sm-4 m-1">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
           
        </div>
        <div className="d-flex align-items-left mt-5 col-md-12">
        <div className="card w-100">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Subject </th>
                            <th> Status </th>
                            <th> Last Update </th>
                            <th> Tracking ID </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src={face} className="me-2" alt="image1" /> David Grey
                            </td>
                            <td> Fund is not recieved </td>
                            <td>
                              <label className="badge badge bg-primary">DONE</label>
                            </td>
                            <td> Dec 5, 2017 </td>
                            <td> WD-12345 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={face} className="me-2" alt="image1" /> David Grey
                            </td>
                            <td> Fund is not recieved </td>
                            <td>
                              <label className="badge badge bg-primary">DONE</label>
                            </td>
                            <td> Dec 5, 2017 </td>
                            <td> WD-12345 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={face} className="me-2" alt="image1" /> David Grey
                            </td>
                            <td> Fund is not recieved </td>
                            <td>
                              <label className="badge badge bg-primary">DONE</label>
                            </td>
                            <td> Dec 5, 2017 </td>
                            <td> WD-12345 </td>
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