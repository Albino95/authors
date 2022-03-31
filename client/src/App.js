import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthors';
import EditAuthors from './components/EditAuthors';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<AllAuthors/>} exact path = '/' default />
        <Route element={<NewAuthor/>} exact path = '/new' />
        <Route element={<EditAuthors/>} exact path = '/edit/:id' />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
