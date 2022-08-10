import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const user_id = localStorage.getItem('user');

    const Logout = () => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000/'
    }
    return (
        <div>

            <header className="header">
                <header className="header">
                    <div className="header-top"><span>30% OFF ON ALL PRODUCTS ENTER CODE: beshop2020</span><i
                        className="header-top-close js-header-top-close icon-close"></i></div>
                    <div className="header-content ">
                        <div className="header-logo"><a href="/"><img
                            src="../assets/img/header-logo.svg" alt="" /></a></div>
                        <div className="header-box">
                            <ul className="header-nav">
                                {user_id == null ? (
                                    <>
                                        <li><NavLink className="active" to="/">Home</NavLink></li>

                                        <li><NavLink className="" to="/all">shop</NavLink></li>


                                        <li><NavLink className="" to="/about">About</NavLink></li>
                                    </>) : (
                                    <>
                                        <li><NavLink className="active" to="/">Home</NavLink></li>

                                        <li><NavLink className="" to="/all">shop</NavLink></li>

                                        <li><NavLink className="" to="/product">Add</NavLink></li>
                                        <li><NavLink className="" to="/about">About</NavLink></li>
                                    </>
                                )
                                }
                            </ul>
                            <ul className="header-options header-nav ">
                                <li><NavLink to="faq"><i className="icon-search"></i></NavLink></li>
                                <li><NavLink to=""><i className="icon-user"></i></NavLink>
                                    <ul>
                                        {user_id == null ? (<>
                                            <li><NavLink to="/login">Login</NavLink></li>
                                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                                        </>) : (<>
                                            <li>
                                                <NavLink onClick={Logout} to="/" >LogOut</NavLink>
                                            </li>
                                        </>)}
                                    </ul>
                                </li>
                                {/* <li><a href="wishlist"><i className="icon-heart"></i></a></li> */}
                                {/* <li><a href="cart"><i className="icon-cart"></i><span>0</span></a> */}
                                {/* </li> */}
                            </ul>
                        </div>
                        <div className="btn-menu js-btn-menu"><span> </span><span> </span><span> </span>
                        </div>
                    </div>
                </header>
            </header>
        </div>
    )
}

export default Nav
