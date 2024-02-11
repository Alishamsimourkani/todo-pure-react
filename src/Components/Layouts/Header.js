import React, { useContext } from "react";
import AuthContext from "../../Context/auth";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.dispatch({ type: 'login_user' });
    let doLogout = () => authContext.dispatch({ type: 'logout_user' });

    return (
        <>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm mb-5">
                    <div className="container d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <strong className="text-white mx-3">Todo App</strong>
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to={`/`} className={({ isActive }) =>
                                        isActive
                                            ? "nav-link text-danger active"
                                            : "nav-link text-white"
                                    }
                                        aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/contact-us`} className={({ isActive }) =>
                                        isActive
                                            ? "nav-link text-danger active"
                                            : "nav-link text-white"
                                    }  >Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={{
                                        pathname: `/about-us`,
                                        search: "?name=ali",
                                        hash: "#info"
                                    }} className={({ isActive }) =>
                                        isActive
                                            ? "nav-link text-danger active"
                                            : "nav-link text-white"
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
            <Outlet />
        </>
    )
}

export default Header;