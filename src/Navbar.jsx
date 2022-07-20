import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { heart } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';


const Navbar =()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                      {/* include font awesome icons and animation for projects and about */}
                      <NavLink to="/main" className="navbar-brand nav-link">Codesbymini</NavLink>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                          <li className="nav-item active d-none"  >
                            <NavLink to="/main" className="nav-link">Main</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/project" className="nav-link"><i class="fa fa-diamond" aria-hidden="true">&nbsp;Projects</i> </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/about" className="nav-link" ><i class="fa fa-bolt" aria-hidden="true">&nbsp;About</i></NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
        </div>

        </>
    )
}
export default Navbar