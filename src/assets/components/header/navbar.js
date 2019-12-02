import React from "react";
import { Link } from "react-router-dom";

import "../../css/navbar.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light navbar-expand-md">
                    <div class="container-fluid">
                        <img src="../../img/logo.png" alt="school logo" width="40" height="40"></img>
                        <Link to="/" class="navbar-brand text-capitalize text-dark" href="#">Computer Science &amp; Engineering</Link>

                        <div class="collapse navbar-collapse d-md-block" id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"><Link to="/" class="nav-link" href="#">Curricourse</Link></li>
                                <li class="nav-item dropdown"><Link class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Quick Links</Link>
                                    <div class="dropdown-menu" role="menu">
                                        <Link class="dropdown-item" role="presentation" href="#">First Item</Link>
                                        <Link class="dropdown-item" role="presentation" href="#">Second Item</Link>
                                        <Link class="dropdown-item" role="presentation" href="#">Third Item</Link>
                                    </div>
                                </li>
                            </ul>

                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group">
                                    <label for="search-field"><i class="fa fa-search"></i></label>
                                    <input class="form-control search-field" type="search" id="search-field" name="search"></input>
                                </div>
                            </form>

                            <span class="navbar-text"></span>
                            <Link class="btn btn-dark action-button" role="button" href="#">Log In</Link>
                        </div>

                        <button data-target="#navcol-1" data-toggle="collapse" class="navbar-toggler">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}