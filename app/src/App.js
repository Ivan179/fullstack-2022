import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main/Main';
import { CreateBlog } from './components/CreateBlog';
import { Info } from './components/Info';
import { About } from './components/About';
import { Login } from './components/Login';
import { MyBlogs } from './components/MyBlogs/MyBlogs';
import { Blog } from './components/Blog/Blog';
import { Post } from './components/Post/Post';
import { ModalContainer } from './components/ModalContainer/ModalContainer';
import { Profile1 } from './components/Profile/Profile1';
import { Profile2 } from './components/Profile/Profile2';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <ModalContainer />
        <Routes>
          <Route path='' element={<Main />}></Route>
          <Route path='/blog-create' element={<CreateBlog />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/my-blogs' element={<MyBlogs />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/blog/:id/post/:postId' element={<Post />}></Route>
          <Route path='/profile1' element={<Profile1 />}></Route>
          <Route path='/profile2' element={<Profile2 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
