import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
function Nav(e) {
  const handlButton = (props, event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    const coursElement = document.querySelector(".cours");
    const contactElement = document.querySelector(".contact");
    const aboutElement = document.querySelector("#FF");

    if (props === "cours" && coursElement) {
      coursElement.scrollIntoView({ behavior: "smooth" });
    }
    if (props === "contact" && contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
    if (props === "about" && aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              id="brand"
              src="https://i.ibb.co/xht01t0/LOGO-removebg-preview.png"
              alt="LOGO-removebg-preview"
              border="0"
            />
            SS-Hub
          </a>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span class="navbar-toggler-icon"></span>
          </button> */}
          {e.ul == "yes" ? (
            <>
              <div
                className="collapse navbar-collapse nav-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav nav-items  mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      onClick={(e) => handlButton("about", e)}
                      className="nav-link "
                      aria-current="page"
                      href="#"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={(e) => handlButton("contact", e)}
                      className="nav-link "
                      aria-current="page"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                  {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
                  {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
                  {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
                </ul>
                <form className="d-flex" role="search"></form>
              </div>
              <button
                onClick={(e) => handlButton("cours", e)}
                className="btn button-cours"
                type="submit"
              >
                COURS
              </button>
            </>
          ) : e.ul == "no" ? (
            <div
              className="collapse navbar-collapse nav-item"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-items  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " href="/cours">
                    FIN FORMATION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/exempls">
                    EXEMPLS
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <a href="/cours">
              <button
                // onClick={(e) => handlButton("cours", e)}
                className="btn button-cours"
                type="submit"
              >
                COURS
              </button>
            </a>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
