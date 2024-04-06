const Participants = () =>{
    return (
        <>
        <div className=" container d-flex flex-row flex-shrink-1 align-items-left">
            <div className="card col-sm-4 m-1">
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
            <div className="card col-sm-4 m-1">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
        <div className="container d-flex flex-row mt-5 justify-content-evenly">
            {/* form for adding user */}
            <div className="col-md-8">
                <form>           
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Username</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username" />
                        </div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>  
            </div>
            <div className="col-md-4">
                {/* display users after being input */}
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Project Status</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> # </th>
                            <th> Name </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            
                          </tr>
                          <tr>
                            <td> 2 </td>
                            <td> Messsy Adam </td>
                            
                          </tr>
                          <tr>
                            <td> 3 </td>
                            <td> John Richards </td>
                            
                          </tr>
                          <tr>
                            <td> 4 </td>
                            <td> Peter Meggik </td>
                           
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Edward </td>
                            
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Ronald </td>
                            
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
export default Participants;