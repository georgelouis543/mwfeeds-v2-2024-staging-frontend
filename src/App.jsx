import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home  from './components/pages/home';
import Createfeed from './components/pages/createfeed';
import Createfeed1 from './components/pages/createfeed1';
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
import Mergedfeeds from './components/pages/mergedfeeds';
import Otherfuncs from './components/pages/otherfuncs';
import Otherfuncfeeds from './components/pages/otherfuncfeeds';
import useAuth from './hooks/useAuth';
import EditOtherfuncs from './components/pages/editotherfuncs';
import EditHtmlfeed1 from './components/pages/editfeed1';

function App() {

  const { auth, setAuth } = useAuth()

  return (
    <>
    {auth.email && (
        <div>
          <Header />
        </div>
      )}
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
            <Route path='/createfeed1' element={<Createfeed1/>}></Route>
            <Route path="/more" element={<More />}></Route>
            <Route path='/editFeed/:feed_id' element={<Editfeed />}></Route>
            <Route path='/editFeed1/:feed_id' element={<EditHtmlfeed1 />}></Route>
            <Route path='/newsfeed' element={<Newsfeed />}></Route>
            <Route path='/newsfeed/newsfeedconvert' element={<Newsfeedconvert />}></Route>
            <Route path='/newsfeed/newsfeedconvertJSON' element={<NewsfeedconvertJSON />}></Route>
            <Route path='/newsfeed/view-all' element={<AllNewsFeeds />}></Route>
            <Route path='/view_merged_feeds' element={<Mergedfeeds />}></Route>
            <Route path='/more/more_operations' element={<Otherfuncs />}></Route>
            <Route path='/more/more_operations/edit_feed/:feed_id' element={<EditOtherfuncs />}></Route>
            <Route path='/more/view-all' element={<Otherfuncfeeds />}></Route>
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
