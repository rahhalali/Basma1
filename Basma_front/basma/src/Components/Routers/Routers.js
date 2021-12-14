import React from 'react';
import { Route ,Routes} from "react-router-dom";
import Combine from "../Combine/Combine";
import Login from "../Login/Login";
function Routers(props) {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Combine/>}/>
            <Route path='/login' element={<Login/>} />
        </Routes>
        </div>
    );
}

export default Routers;