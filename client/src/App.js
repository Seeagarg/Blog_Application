import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About';
import Popular from './Pages/Popular';
import Profile from './Pages/Profile';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import EditProfile from './Pages/EditProfile';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/popular' element={<Popular/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/createPost' element={<CreatePost/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/post/:id' element={<PostPage/>}/>
    <Route path='/editProfile' element={<EditProfile/>}/>

    </Routes>
  );
}

export default App;
