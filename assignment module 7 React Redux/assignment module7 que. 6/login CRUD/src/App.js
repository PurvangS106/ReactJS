import Dash_board from "./pages/Dash_board";
import Log_in from "./pages/Log_in";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Manage_user from "./pages/Manage_user";
import Header from "./component/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_user from "./pages/Add_user";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route index path="/" element={<><Log_in/></>}></Route>
        <Route path="/dashboard" element={<><Header/><Dash_board/></>}></Route>
        <Route path="/user" element={<><Header/><Manage_user/></>}></Route>
        <Route path="/adduser" element={<><Header/><Add_user/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
