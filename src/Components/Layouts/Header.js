import React, { useContext } from "react";
import AuthContext from "../../Context/auth";
import { NavLink } from "react-router-dom";

function Header() {
    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.dispatch({ type: 'login_user' });
    let doLogout = () => authContext.dispatch({ type: 'logout_user' });

    return (
        <header>
            <div className="navbar navbar-dark bg-light shadow-sm mb-5">
                <div className="container d-flex justify-content-between">
                    <div className="d-felx">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <NavLink to={`/`} className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                    aria-current="page">Todo App</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/contact-us/1`} className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }  >Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={{
                                    pathname: `/about-us`,
                                    search: "?name=ali",
                                    hash: "#info"
                                }} className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                } >About Us</NavLink>
                            </li>
                        </ul>
                    </div>


                    {
                        !authContext.authenticated
                            ? <button type="button" className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button type="button" className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;