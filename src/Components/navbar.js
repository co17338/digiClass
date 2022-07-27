import { Component } from "react";
import { connect } from "react-redux";
import Profile from "../Pages/Teacher/Profile";
import BasicModal from "./modal";

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>;

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        digiClass 
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              My Profile <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            
            <BasicModal/>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                See Enrollment Requests
              </a>
              <a class="dropdown-item" href="#">
                See Enrolled Students
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                See all courses
              </a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
