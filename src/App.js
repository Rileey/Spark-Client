import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContentDescription from './components/contentDescription';
import Home from './pages/home';
import Login from './pages/login';
import Watch from './pages/watch';
import Register from './pages/register';
import { AuthContext } from './authContext/authContext'
import SuccessPage from './pages/successpage';
import Search from './pages/search';
import Account from './components/account.js';



function App() {
  
  const { user } = useContext(AuthContext)

  return (
    <>
    <BrowserRouter>
      <Routes >
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" /> } />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" /> } />
      <Route path="/signin" element={!user ? <Login /> : <Navigate to="/" /> } />
      <Route path="/success" element={<SuccessPage />} />
        {user && (
          <>
          <Route path="/movies" element={<Home type='Movies' />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Home type='Series' />} />
          <Route path="/content/watch/:id" element={<Watch />} />
          <Route path="/content/:id" element={<ContentDescription />} />
          <Route path="/account/:id" element={<Account />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
