import { useState } from "react";
import { Home } from "./pages/home/index";
import { Login } from "./pages/login/index";
import { SignUp } from "./pages/signUp/index";


function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  const renderPage = () => {
    if(currentPage === 'login'){
      return(
      <Login
        changePage={() => setCurrentPage("home")}
        changeSignUp={() => setCurrentPage("signUp")}
      />);
    } else if (currentPage === 'home'){
       return <Home changePage={() => setCurrentPage("login")} />;
    } else if (currentPage === 'signUp'){
      return <SignUp changePage={() => setCurrentPage("home")} />;
    }
  }

  return <>{renderPage()}</>
  
}

export default App;
