import './App.css';
import { Layout, Login } from './Pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {

  const isLoggedIn = false;

  return (
    <div className="App">
      <Routes>
        {/* пользователь не авторизован */}
        {
          !isLoggedIn && (
            <Route path="/login" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="test" element={<>TEst</>} />
            </Route>
          )
        }
        {/* пользователь не авторизован */}
        {
          isLoggedIn && (
            <Route path="/" element={<></>}>
            </Route>
          )
        }
      </Routes>
    </div>
  );
}

export default App;
