import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main/Main';
import { CreateBlog } from './components/CreateBlog';
import { Info } from './components/Info';
import { About } from './components/About';
import { Login } from './components/Login';
import { MyBlogs } from './components/MyBlogs';
import { Blog } from './components/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Main />}></Route>
        <Route path='/blog-create' element={<CreateBlog />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/my-blogs' element={<MyBlogs />}></Route>
        <Route path='/blog/:id' element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
