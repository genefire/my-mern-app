
const ParticipantsAdd = () =>{
    return (
      <>       
        <div className='row flex-row pb-4 mt-3 align-items-left justify-content-between'>
          <h4 className='w-25'>Participants</h4> 
          <hr className='mt-3' />
        </div>
        <div className='row'>
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
     
      </>
  );
  }
  export default ParticipantsAdd;