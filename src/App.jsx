import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home  from './components/pages/home';
import Createfeed from './components/pages/createfeed';
import More from './components/pages/more';
import Editfeed from './components/pages/editfeed';
import PersistLogin from './components/authController/PersistLogin'
import Unauthorized from './components/authController/Unauthorized'
import Layout from './components/authController/Layout'
import LoginTemplate from './LoginTemplate'
import Missing from './missing'
import UseLogout from './hooks/UseLogout'
import Logout from './components/authController/Logout'
import RequireAuth from './components/authController/RequireAuth'
import Login from './components/authController/Login'
import Newsfeed from "./components/pages/newsfeed";
import Newsfeedconvert from "./components/pages/newsfeedconvert";
import Header from "./components/header"
import NewsfeedconvertJSON from './components/pages/newsfeedconvertJSON';
import AllNewsFeeds from './components/pages/allnewsfeeds';

function App() {

  return (
    <>
    <div>
    <Header></Header>
    </div>
      <div className='py-20'>
    <Routes>

      <Route path="/" element={<Layout></Layout>} >

      <Route element={<PersistLogin />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* Public routes */}
      <Route path="logintemplate" element={<LoginTemplate/>}></Route>
      <Route path="unauthorized" element={<Unauthorized/>}></Route>
      <Route path="loggedout" element={<Logout/>}></Route>
      



      {/* Protected Routes */}

      <Route element={<PersistLogin/>}>
        <Route element={<RequireAuth/>}>
            <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="/home" element={<Home />} exact></Route>
            <Route path='/createFeed' element={<Createfeed />}></Route>
            <Route path="/more" element={<More />}></Route>
            <Route path='/editFeed/:feed_id' element={<Editfeed />}></Route>
            <Route path='/newsfeed' element={<Newsfeed />}></Route>
            <Route path='/newsfeed/newsfeedconvert' element={<Newsfeedconvert />}></Route>
            <Route path='/newsfeed/newsfeedconvertJSON' element={<NewsfeedconvertJSON />}></Route>
            <Route path='/newsfeed/view-all' element={<AllNewsFeeds />}></Route>
            {/* <Route path='/newsfeed/newsfeedconvertJson' element={<Newsfeed />}></Route> */}
        </Route>
      </Route>



      <Route path="*" element={<Missing/>}></Route>




      </Route>

    </Routes>
    </div>
    </>
  )
}

export default App
