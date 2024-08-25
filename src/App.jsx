import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/introduction';
import Menu from './components/menu';
import Video from './components/video';
import Policy from './components/policy';
import Main from './components/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/video/:chapterId' element={<Video />} />
        <Route path='/policy/:chapterId' element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;