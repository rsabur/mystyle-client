import './App.css';
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import AppMenu from './components/AppMenu';
import OutfitContainer from './components/OutfitContainer';
import ClosetContainer from './components/ClosetContainer';
import Logo from "./cover.png";
import Logo3 from "./cover3.png";

function App() {
  const [clothings, setClothings] = useState([])
  const [users, setUsers] = useState([])
  const [models, setModels] = useState([])
  const [isUsersLoaded, setIsUsersLoaded] = useState(false);
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);


  useEffect(() => {
    fetch('http://127.0.0.1:3000/clothings')
      .then(r => r.json())
      .then(clothingsArr => {
        setClothings(clothingsArr)
        setIsUsersLoaded(true)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/users')
      .then(r => r.json())
      .then(usersArr => {
        setUsers(usersArr)
        setIsUsersLoaded(true)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/models')
      .then(r => r.json())
      .then(modelsArr => {
        setModels(modelsArr)
        setIsModelsLoaded(true)
      })
  }, [])

  if (!isUsersLoaded) return <h2>Loading...</h2>
  if (!isModelsLoaded) return <h2>Loading...</h2>

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <img src={Logo} alt="logo" style={{ width: '100%', height: "27rem" }} />
          <LandingPage />
        </Route>
        <Route exact path='/myprofile'>
          <img src={Logo3} alt="logo" style={{ width: '100%'}} />
          <AppMenu />
          <div className="profile-comp">
          <ProfilePage users={users} models={models} />
          </div>
        </Route>
        <Route exact path='/myoutfits'>
          <img src={Logo3} alt="logo" style={{ width: '100%' }} />
          <AppMenu />
          <OutfitContainer users={users} models={models} />
        </Route>
        <Route exact path='/mycloset'>
          <div className="Closet">
          <img src={Logo3} alt="logo" style={{ width: '100%' }} />
          <AppMenu />
            <ClosetContainer clothings={clothings} users={users} models={models} />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App;