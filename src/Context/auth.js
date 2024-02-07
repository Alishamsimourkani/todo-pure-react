import React from "react";

const AuthContext = React.createContext({
    login: () => { },
    logout: () => { },
    authenticated: false
})




export default AuthContext
