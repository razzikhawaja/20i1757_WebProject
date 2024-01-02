import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages & components
import AdminLogin from "./pages/AdminLogin";
import RegisterTourAgent from "./pages/TourAgentMangement/RegisterTourAgent"; 
import DeleteTourAgent from "./pages/TourAgentMangement/DeleteTourAgent"; 
import UpdateTourAgent from "./pages/TourAgentMangement/UpdateTourAgent"; 
import DeleteCustomer from "./pages/CustomerManagement/DeleteCustomer";
import CustomerList from "./pages/CustomerManagement/CustomerList"; 
import TourAgentList from "./pages/TourAgentMangement/TourAgentList"; 
import Home from "./pages/Home"; 
import './index.css'; 
import BlockCustomer from './pages/CustomerManagement/BlockCustomer';
import BlockTourAgent from './pages/TourAgentMangement/BlockTourAgent';

function App() {
  return (
    <Router>

        <div className="App">
        <div className="pages">

            <Routes>

                <Route path='/' element={<AdminLogin />} />
                <Route path='/dashboard' element={<Home />} />
                <Route path='/view_tour_agent' element={<TourAgentList />} />
                <Route path='/delete_tour_agent' element={<DeleteTourAgent />} />
                <Route path='/update_tour_agent/:email' element={<UpdateTourAgent />} />
                <Route path='/create_tour_agent' element={<RegisterTourAgent />} />
                <Route path='/delete_customer' element={<DeleteCustomer />} />
                <Route path='/view_customer' element={<CustomerList />} />
                <Route path='/block_customer' element={<BlockCustomer />} />
                <Route path='/users/block_tour_agent' element={<BlockTourAgent />} />


                
            </Routes>
          
        </div>
        </div>

    </Router>
  );
}

export default App;
