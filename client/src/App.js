import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Participants from './pages/Participants';
import ParticipantsAdd from './pages/Participants_add';
import Members from './pages/Members';
import AdminLayout from './layout/Adminlayout';



const App = () => {
  return (
    <div className="App">
        <BrowserRouter>

          {/* Header */}
          <Header />

          {/* Login */}
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes> 
          
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="participants" element={<Participants />} />
              <Route path="participants/addParticipants" element={<ParticipantsAdd />} />
              <Route path="members" element={<Members />} />
              {/* Add more routes for other admin panel pages */}
            </Route>


          
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;