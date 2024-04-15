import '../assets/css/login.css';

const Login = () =>{
    return (
       
            <div className='container'>
               <div className='row justify-content-center align-items-center min-vertical-height '>
                    <div class="card w-50">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <form>           
                                <div className="mb-3">
                                    <label for="formGroupExampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" />
                                    </div>
                                    <div className="mb-3">
                                    <label for="formGroupExampleInput2" className="form-label">Password</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>  
                        </div>
                    </div> 
               </div>
            </div>
                 
                   
          
    );
}
export default Login;