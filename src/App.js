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

function App() {

  const [visitHistory, setVisitHistory] = useState([])

  function handleHistory(url) {
    setVisitHistory([...visitHistory, url])
    console.log(visitHistory)
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
              <ViewHistory urlArray={visitHistory}/>
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
