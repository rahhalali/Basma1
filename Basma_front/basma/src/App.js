import './App.css';
import Routers from "./Components/Routers/Routers";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
