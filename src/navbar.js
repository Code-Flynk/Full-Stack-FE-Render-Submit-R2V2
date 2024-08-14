// IMPORT OF NAV BAR AND BOOTSTRAP ICON REFERENCES FOR LABELS
import "bootstrap-icons/font/bootstrap-icons.css"
import { NavLink, Outlet } from "react-router-dom";

function Navbar(){  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  text-light" >  <NavLink to={`/`} className="navbar-brand  text-light">&nbsp;&nbsp;  <i class="bi bi-bank2"></i> MIT Full Stack Bank Exercise
 &nbsp;&nbsp;</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
        
            <li className="nav-item "  data-toggle="tooltip" title="CLICK HERE TO CREATE YOUR OWN ACCOUNT" data-placement="bottom">
              <NavLink to={`create_account`} className="nav-link  text-light "><i class="bi bi-shield-fill-plus"></i> CREATE YOUR ACCOUNT</NavLink>
            </li> &nbsp;&nbsp; 
            <li className="nav-item" data-toggle="tooltip"   title="DEPOSIT HERE IF YOU HAVE AN ACCOUNT" data-placement="bottom">
              <NavLink to={`accounts_deposit`} className="nav-link   text-light"><i class="bi bi-database-fill-up"></i> DEPOSIT FUNDS</NavLink>
            </li> &nbsp;&nbsp; 
            <li className="nav-item" data-toggle="tooltip" title="WITHDRAW HERE IF YOU HAVE AN ACCOUNT" data-placement="bottom" >
              <NavLink to={`accounts_withdraw`} className="nav-link   text-light"><i class="bi bi-database-fill-down"></i> WITHDRAW FUNDS</NavLink>
            </li> &nbsp;&nbsp; 
            <li className="nav-item" data-toggle="tooltip"  title="THIS IS WHERE USER DATA IS STORED" data-placement="bottom">
              <NavLink to={`all_data`} className="nav-link   text-light"><i class="bi bi-person-vcard-fill"></i> ALL USER DATA</NavLink>
            </li> &nbsp;&nbsp; 

{/* //testing bootstrap import: */}
            {/* <button class="btn btn-outline-success me-2" onclick="window.location.href='https://code-flynk.github.io/Projects/';"
       type="button"><i class="bi bi-house"></i> Projects Landing Page</button> */}

          </ul>
        </div>
      </nav>
      <div id="detail"><Outlet /></div></>
  )  
}
export default Navbar;
