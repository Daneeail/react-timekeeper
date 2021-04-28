import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;


// const authContext = React.createContext<any>(null);

// const authentication = {
//   isAuthenticated: false,

//   login(f: any) {
//     this.isAuthenticated = true;
//     f();
//   },

//   logout(f: any) {
//     this.isAuthenticated = false;
//     f();
//   }
// }

// const useAuth = () => {
//   return useContext(authContext);
// }

// const useProvideAuth = () => {
//   const [user, setUser] = useState<string | null>(null);

//   const login = (f: () => void) => {
//     return authentication.login(() => {
//       setUser('user');
//     });
//   };

//   const logout = (f: () => void) => {
//     return authentication.logout(() => {
//       setUser(null);
//     });
//   };

//   return {
//     user,
//     login,
//     logout
//   }
// }

// const ProvideAuth = ({ children }: any) => {
//   const auth = useProvideAuth();

//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   ) 
// }

// const PrivateRoute = ({ children }: any, { ...rest }: any) => {
//   let auth = useAuth();

//   if (auth.user) return <Route {}
// }