const Login = () =>{
    return (
        <div className="container">
            <div className="row align-items-center"> 
               <div className="w-50 m-auto mt-5 ">                
                    <div class="card">
                        <div class="card-header">
                            Login
                        </div>
                        <div class="card-body">
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
                    </div> 
               </div>
            </div>
        </div>
    );
}
export default Login;