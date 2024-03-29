import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ReadArticle from './components/ReadArticle/ReadArticle';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/article' element={<ReadArticle></ReadArticle>}></Route>
      </Routes>
    </div>
  );
}

export default App;
