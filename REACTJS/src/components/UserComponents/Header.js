import { head } from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../asset/css/full.css';
import '../asset/bootstrap5.2/css/bootstrap.css';
import {Nav, NavDropdown} from 'react-bootstrap'
var Diamond = require('../asset/image/logo.png');
const Header = ({ isLoggedIn, userInfo, handleLogout }) => {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
             
        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-3 col-sm-12  text-center">
              <span class="fs-6 text-secondary title nav-link">Welcome to Multikart</span>
            </div>
            <div class="col-lg-3 responsive_none ">
              <span class="fs-6 text-secondary nav-link"><i class="fa-solid fa-phone">&emsp;</i>
                Call Us : +84 886-670-711</span>
            </div>
            <div class="col-lg-3 offset-3 responsive_none d-flex">
              <span class="text-secondary nav-link  csshoverheader responsive_none"> <i class="fa-solid fa-heart text-secondary"></i>
              &nbsp;Wish List&nbsp;&nbsp;</span>
              {isLoggedIn ? (
                            <NavDropdown title={userInfo?.first_name || 'User'}>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <NavDropdown title="Setting">
                                <NavDropdown.Item href="/logins">Login</NavDropdown.Item>
                            </NavDropdown>
                        )}
            </div>
          </div>
        </div>
        <div class="container mt-3">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="row">

                <div class="col-3 mt-1"><a class="navbar-brand" href="#"><img src={Diamond} alt=""/></a></div>
                <div class="col-7">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> 
                  <div class="navbar-nav fs-4">
                    <Nav.Link class="nav-link active  responsive_none" as={NavLink} to="/product" aria-current="page">HOME</Nav.Link>
                    <a class="nav-link  responsive_none" href="#">SHOP</a>
                    <a class="nav-link responsive_none" href="#">FEATURED</a>
                    <a class="nav-link responsive_none" href="#">PRODUCTS</a>
                    <a class="nav-link responsive_none" href="#">PAGE</a>
                    <a class="nav-link responsive_none" href="#">BLOGS</a>
                    <div class="icon-navbar">
                      <a class="nav-link responsive_none" href="#">
                      <i class="fa-solid iconmt fa-magnifying-glass fs-4"></i>
                      </a>
                      <a class="nav-link iconmt responsive_none position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      <i class="fa-solid fa-cart-shopping fs-4 mb-2 "></i>
                    <span class="position-absolute translate-middle bg-danger border border-light rounded-circle  icontb">
                0
                <span class="visually-hidden">unread messages</span>
                    </span>
                      </a>
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </nav>
        </div>
        <div class="offcanvas-header-none">
          <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
              class="fa-solid fa-bars"></i></button>
    
          <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src="./images/logo.png" alt=""/></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"/>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Product</a>
                  <a class="nav-link" href="#">Feature</a>
                  <a class="nav-link" href="#">Page</a>
                  <a class="nav-link" href="#">Blog</a>
    
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a class="dropdown-item" href="./indexdn.html">Login {}</a></li>
                    <li><a class="dropdown-item" href="./indexdk.html">Log Up</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider"/>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else
                        here</a></li>
                  </ul>
                </li>
            </div>
          </div>
        </div>
       
      </header>
      
    );
};

export default Header;
