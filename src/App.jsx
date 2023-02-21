import { createContext, useReducer } from "react";
import { Home } from "./pages/home/index";
import { Login } from "./pages/login/index";
import { SignUp } from "./pages/signUp/index";
import { Photo } from './pages/photo/index';


function reducer(state, action) {
  console.log(action, "<-- action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "add_user":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
        },
      };

    case "add_photos_user":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    case "add_highligh_image":
      const currentImage = state.user.photos.find((img) => {
        return img.id === action.payload;
      });

      return {
        ...state,
        user: {
          ...state.user,
          highlightImage: currentImage,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: {
    username: "@happywoman",
    photos: [],
    highlightImage: null,
  },
};

export const InstaContext = createContext(initialState);


function App() {
 const [globalState, dispatch] = useReducer
 (reducer, initialState);
 console.log(globalState.currentPage);
 
 return (
   <>
     <InstaContext.Provider
       value={{ meuState: globalState, meuDispatch: dispatch }}
     >
       {globalState.currentPage === "login" && <Login />}
       {globalState.currentPage === "home" && <Home />}
       {globalState.currentPage === "signup" && <SignUp />}
       {globalState.currentPage === "fullscreen" && <Photo />}
     </InstaContext.Provider>
   </>
 );
}

export default App;
