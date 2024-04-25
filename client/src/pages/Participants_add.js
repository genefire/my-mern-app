
const ParticipantsAdd = () =>{
    return (
      <>       
        <div className='row flex-row pb-4 mt-3 align-items-left justify-content-between'>
          <h4 className='w-25'>Participants</h4> 
          <hr className='mt-3' />
        </div>
        <div className='row flex-row'>
            <div className='col-md-8'>
              <div className="card">
                <div className="card-body">
                  <form>           
                      <div className="mb-3">
                          <label for="formGroupExampleInput" className="form-label">First Name</label>
                          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" />
                          </div>
                          <div className="mb-3">
                          <label for="formGroupExampleInput2" className="form-label">Surname</label>
                          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>  
                </div>
              </div>
            </div>
            <div className='col-md-4'>
                <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-font-size">
                      <thead>
                        <tr>
                          <th scope="col"> First Name </th>
                          <th scope="col"> Last Name </th>                         
                          <th scope="col"> Alias </th>                         
                          <th scope="col"> Encoded By</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td> David  </td>
                            <td>  Grey </td>
                            <td>  DG </td>                           
                            <td> Encoder </td>
                           
                        </tr>
                        <tr>
                            <td> David  </td>
                            <td>  Grey </td>
                            <td>  DG </td>                           
                            <td> Encoder </td>
                          
                        </tr>
                        <tr>
                            <td> David  </td>
                            <td>  Grey </td>
                            <td>  DG </td>                           
                            <td> Encoder </td>
                           
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
     
      </>
  );
  }
  export default ParticipantsAdd;