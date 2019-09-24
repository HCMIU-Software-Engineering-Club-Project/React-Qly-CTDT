import React from 'react';

import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar">
                <nav>
                    <ul >
                        <li class="homepage"><a href="#home">EduBoard</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#G&C">Grade & Curriculum</a></li>
                        <li style={{float: 'right'}} class="dropdown">
                            <a href="#account" class="dropbtn">ITITIU17067
                                <i class="fa fa-caret-down"></i>
                            </a>
                            <div class="dropdown-content">
                                <a href="#">EB Home</a>
                                <a href="#">Post</a>
                                <a href="#">Updates</a>
                                <a href="#">My Grades</a>
                                <a href="#">Calendar</a>
                            </div>
                        </li>
                        <li style={{float: "right"}}>
                            <a href="#mail">
                                <i class="fa fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}