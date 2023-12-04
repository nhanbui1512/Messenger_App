import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './Components/GlobalStyles';
import DashboardPage from './Pages/Dashboard';
import { DefaultLayout } from './Layouts';
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
            ></Route>

            <Route
              key={0}
              path="/*"
              element={
                <DefaultLayout>
                  <DashboardPage />
                </DefaultLayout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;
