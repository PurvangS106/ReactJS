import React from 'react'
import { ThemeContext } from "../context/themeContext";

function Home() {
    const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      <section>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 text-end">
                <button class="btn1" onClick={toggleFunction}>{toggle ? <i class="bi bi-brightness-high"></i> : <i class="bi bi-moon-stars"></i>}</button>
            </div>
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow" style={toggle ? { background: "black", color:"white" } : {}}>
                <div class="card-body p-5">

                    <h3 class="mb-3">Log in</h3>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="typeEmailX-2">Email</label>
                    <input type="email" id="typeEmailX-2" class="form-control form-control-md" style={toggle ? { background: "black", color:"white" } : {}}/>                 
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="typePasswordX-2">Password</label>
                    <input type="password" id="typePasswordX-2" class="form-control form-control-md" style={toggle ? { background: "black", color:"white"} : {}}/>                    
                    </div>

                    <button class="btn btn-primary btn-md btn-block w-100" type="submit">Log In</button>

                    <hr class="my-4" />

                    <button class="btn btn-md btn-block btn-primary w-100" style={{backgroundColor: "#dd4b39"}}
                    type="submit"><i class="fab fa-google me-2"></i> Creat Account</button>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Home