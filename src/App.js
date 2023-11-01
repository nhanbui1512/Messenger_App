import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './Layouts';
import './App.css';
function App() {
    return (
        <BrowserRouter>
            <div className={`App`}>
                <Routes>
                    <Route key={0} path="/" element={<DefaultLayout>Home</DefaultLayout>}></Route>
                    <Route key={0} path="/message" element={<h1>message</h1>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
