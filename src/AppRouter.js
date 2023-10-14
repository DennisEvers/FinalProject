import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import App from './App'
import Add from './Add.js'
import Edit from './Edit.js'
import Team from './Team.js'
import EditTeam from './EditTeam.js'
import AddTeam from './AddTeam.js'
import NavMenu from './Navbar'
import Home from './HomePage'
import UpdateObtained from './UpdateObtained'
import GymPage from './GymPage'

//This is the brain of the app controlling what goes where. When the app itself runs this is the program that is called. This contains the function app router which creates the browser router
// that inside holds the navbar so that it is disiminated to every webpage as well as the footer. It then contains all the Routes that allow the app to navigate between all the pages and 
// functions that the app contains. Each function and app can use the navbar to move through out the different pages and uses useNAvigate to utilize this as well so that when you update
// or anything it can navigate you back to the app page you started at.


function AppRouter() {

  let urlfoot = "https://i.pinimg.com/originals/c2/6d/2b/c26d2b5b239f966d2eab1d6015b115a9.png"
    return (
        

       // <div className='bg-light'>
           // <div className='border1  p-5 pb-3'>
              //  <h1 className=' fs-1 fw-b text-center titletext'>Pokemon Team</h1>
          //  </div>
            <div>


        <BrowserRouter>
        <NavMenu />
        
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<App />} />
            <Route path='create' element={<Add />} />
            <Route path='update/:id' element={<Edit />} />
            <Route path='team' element={<Team />} />
            <Route path='updateteam/:id' element={<EditTeam />}/>
            <Route path='createteam' element={<AddTeam />}/>
            <Route path='updategym/:id' element={<UpdateObtained/>}></Route>
            <Route path='/gymtable' element={<GymPage />} />



          </Routes>
        </BrowserRouter>

        <div>
            <hr></hr>
            <footer className='fs-3 fw-bold text-center pt-1 mt-1 '><img src={urlfoot} alt=""  width="50px"></img>Its up to you to become the very best!<img src={urlfoot} alt=""  width="50px"></img></footer>
            <footer className='fs-3 fw-bold text-center '>Unlock the Power Thats Inside!</footer>
        </div>


        </div>
        
    )
}

export default AppRouter