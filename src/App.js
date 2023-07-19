import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage';
import Search from './Search'
import ProfilePage from './ProfilePage'
import Details from './Details';
import ViewHistory from './ViewHistory';
import LoginPage from './LoginPage'
import RegisterPage1 from './RegisterPage1';
import RegisterPage2 from './RegisterPage2';
import RegisterPage3 from './RegisterPage3';
import MoviePage from './MoviePage';
import data from './user2';

function App() {

  if(!localStorage.getItem("data")){
    localStorage.setItem("data", JSON.stringify(data));
  }
  
  const data1 = JSON.parse(localStorage.getItem("data"));

  function handleHistory(url, currentDate) {
    data1.users.forEach(user => {
      if (user.loggedin) {
        let addedOnce = false
        let i = 0
        while(i<user.viewedMovieslength && !addedOnce){
          if(
              user.viewedMovies[i].url === url &&
              user.viewedMovies[i].currentDate === currentDate
            ){
            addedOnce = true
          }
          i++
        }
        if(!addedOnce){
          user.viewedMovies.push({url, currentDate })
        }
      }
    })
    localStorage.setItem("data", JSON.stringify(data1))
    console.log(JSON.parse(localStorage.data))
  }

  return (
    <div>
      <Header />
      <div style={{
        paddingBottom: "130px"
      }}>
        <Routes >
          <Route path="/" element={
            <Homepage />
          } />

          <Route path="/:id" element={
            <MoviePage handleClick={handleHistory} />
          } />


          <Route path="Search" element={
            <Search />
          } />

          <Route path="ProfilePage" element={
            <ProfilePage />
          }>
            <Route path="Details" element={
              <Details />
            }
            />
            <Route path="ViewHistory" element={
              <ViewHistory/>
            }
            />
          </Route>

          <Route path="LoginPage" element={
            <LoginPage />
          } />

          <Route path="RegisterPage1" element={
            <RegisterPage1 />
          } />

          <Route path="RegisterPage2" element={
            <RegisterPage2 />
          } />

          <Route path="RegisterPage3" element={
            <RegisterPage3 />
          } />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
