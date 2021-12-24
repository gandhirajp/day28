import DashBoard from './DashBoard';
import logo from './logo.svg';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userform from './Userform'
import Useredit from './Useredit'
import Userlist from './Userlist'
import Productform from './Productform'
import Proedit from './Proedit'
import Productlist from './Productlist';
 

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              
                <Routes>

                  <Route path="/" element={<DashBoard />}></Route>
                  <Route path="/users" element={<Userlist />}> </Route>
                  <Route path="/usersform" element={<Userform />}> </Route>
                  <Route path="/edit/:id" element={<Useredit />}> </Route>
                  <Route path="/pro" element={<Productlist />}> </Route>
                  <Route path="/productform" element={<Productform />}> </Route>
                  <Route path="/editpro/:id" element={<Proedit />}> </Route>
                 
                </Routes>


            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; 
