import React from "react";

function Header2() {
  return (
    <div style={{
      display: 'flex', backgroundColor: "#151E3D", alignItems: 'center', justifyContent: 'center', backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 1.0, // Set the opacity of the image (0.0 to 1.0)
      filter: "brightness(90%)"
    }}>

      <nav class="navbar navbar-expand-lg navbar-light bg-#151E3D" style={{ "border-radius": "10px", width: "85%" }}>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/inventory" style={{ padding: '0 50px', color: 'white' }}>Inventory Management</a>
              <a class="nav-item nav-link active" href="/billing" style={{ padding: '0 50px', color: 'white' }}>Billing & Accounting</a>
              <a class="nav-item nav-link" href="/pharmacy" style={{ padding: '0 50px', color: 'white' }}>Pharmacy Management</a>
              <a class="nav-item nav-link" href="/allAttendace" style={{ padding: '0 50px', color: 'white' }}>Human Resources</a>
              <a class="nav-item nav-link " href="/allreport" style={{ padding: '0 50px', color: 'white' }}>Medical Reports</a>
              <a class="nav-item nav-link " href="/patients" style={{ padding: '0 50px', color: 'white' }}>Patient Management</a>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header2;