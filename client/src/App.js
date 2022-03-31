import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<AllAuthors/>} exact path = '/' default />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
