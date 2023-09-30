import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const authInfo = {name: 'Jon deo'}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.prototype ={
    children: PropTypes.node
}


/**
 * 1. crate context and export it
 * 2. set provider with value
 * 3. usee the Auth Provide in the main.jsx file 
 * 4. access children in the AuthProvider component as children and use it the middle of the provider 
 * 5. 
 */