import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './Components/GlobalStyles';
import DashboardPage from './Pages/Dashboard';
import { DefaultLayout } from './Layouts';
import Login from './Pages/Login';

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter basename="/">
        <div className={`App`}>
          <Routes>
            <Route
              key={0}
              path="/active"
              element={
                <DefaultLayout>
                  <DashboardPage />
                </DefaultLayout>
              }
            />

            <Route
              key={1}
              path="/*"
              element={
                <DefaultLayout>
                  <DashboardPage />
                </DefaultLayout>
              }
            />

            <Route key={2} path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;
