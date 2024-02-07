import React, { useContext } from "react";
import AuthContext from "../../Context/auth";

function Header() {
    const authContext = useContext(AuthContext);

    let doLogin = () => authContext.login();
    let doLogout = () => authContext.logout();

    return (
        <header>
            <div className="navbar navbar-dark bg-light shadow-sm mb-5">
                <div className="container d-flex justify-content-between">
                    <strong>Todo App</strong>
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