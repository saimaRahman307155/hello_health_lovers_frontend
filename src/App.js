import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Pages/Home/Home/Home';
import NotFound from './component/Pages/NotFound/NotFound';
import Login from './component/Shared/Login/Login';
import Register from './component/Shared/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './component/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import DashboardHome from './component/Dashboard/DashboardHome/DashboardHome';
import Profile from './component/Dashboard/Profile/Profile';
import AdminRoute from './component/Shared/AdminRoute/AdminRoute';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AllUsers from './component/Dashboard/AllUsers/AllUsers';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/makeAdmin" element={<AdminRoute>
              <MakeAdmin />
            </AdminRoute>} />
            <Route path="/dashboard/allUsers" element={<AdminRoute>
              <AllUsers />
            </AdminRoute>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
