import './App.css'
import { Switch, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import ProfilePage from './components/ProfilePage'
import AppMenu from './components/AppMenu'
import OutfitContainer from './components/OutfitContainer'
import ClosetContainer from './components/ClosetContainer'
import Logo from "./cover.png"
import Logo3 from "./cover3.png"

function App() {
  const [users, setUsers] = useState([])
  const [models, setModels] = useState([])
  const [outfits, setOutfits] = useState([])
  const [clothings, setClothings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [outfitClothings, setOutfitClothings] = useState([])
  const [isOutfitClothingsLoaded, setIsOutfitClothingsLoaded] = useState(false)
  const [isUsersLoaded, setIsUsersLoaded] = useState(false)
  const [isModelsLoaded, setIsModelsLoaded] = useState(false)
  const [isClothingsLoaded, setIsClothingsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:3000/clothings')
      .then(r => r.json())
      .then(clothingsArr => {
        setClothings(clothingsArr)
        setIsClothingsLoaded(true)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/users/2')
      .then(r => r.json())
      .then(user => {
        setUsers(user)
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

  useEffect(() => {
    fetch('http://localhost:3000/outfits')
      .then(r => r.json())
      .then(outfitArr => {
        setOutfits(outfitArr)
        setIsLoaded(true)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/outfit_clothings')
      .then(r => r.json())
      .then(outfitClothingsArr => {
        setOutfitClothings(outfitClothingsArr)
        setIsOutfitClothingsLoaded(true)
      })
  }, [])

  if (!isLoaded) return <h2>Loading...</h2>
  if (!isOutfitClothingsLoaded) return <h2>Loading...</h2>
  if (!isUsersLoaded) return <h2>Loading...</h2>
  if (!isModelsLoaded) return <h2>Loading...</h2>
  if (!isClothingsLoaded) return <h2>Loading...</h2>

  const filteredClothings = clothings.filter(clothing => {
    return clothing.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleAddClothing = (newClothing) => {
    const newClothingArr = [newClothing, ...clothings]
    setClothings(newClothingArr)
  }

  const handleAddOutfit = (newOutfit) => {
    const newOutfitsArr = [newOutfit, ...outfits]
    setOutfits(newOutfitsArr)
  }

  const handleAddOutfitClothing = (newOutfitClothing) => {
    const newOutfitClothingsArr = [newOutfitClothing, ...outfitClothings]
    setOutfitClothings(newOutfitClothingsArr)
  }

  const deleteClothing = (clothingId) => {
    const minusClothing = clothings.filter(clothing => clothing.id !== clothingId)
    setClothings(minusClothing)
  }

  const handleEditOutfit = (editedOutfit) => {
    const updateOutfit = outfits.map(outfit => {
      if (outfit.id === editedOutfit.id) {
        return editedOutfit
      } else {
        return outfit
      }
    })
    setOutfits(updateOutfit)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <img src={Logo} alt="logo" style={{ width: '100%', height: "27rem", filter: 'contrast(129%)', boxShadow: '0px 14px 5px #ccc'  }} />
          <LandingPage models={models} users={users} setUsers={setUsers} />
        </Route>
        <Route exact path='/myprofile'>
          <img src={Logo3} alt="logo" style={{ width: '100%', filter: 'contrast(129%)', boxShadow: '0px 14px 5px #ccc'  }} />
          <AppMenu />
          <div className="profile-comp">
            <ProfilePage user={users} models={models} setUsers={setUsers} />
          </div>
        </Route>
        <Route exact path='/myoutfits' >
          <img src={Logo3} alt="logo" style={{ width: '100%', filter: 'contrast(129%)', boxShadow: '10px 10px 5px #ccc', boxShadow: '0px 14px 5px #ccc'  }} />
          <AppMenu />
          <OutfitContainer users={users} models={models}
            clothings={clothings} outfits={outfits}
            outfitClothings={outfitClothings} setOutfits={setOutfits}
            onEditOutfit={handleEditOutfit} />
        </Route>
        <Route exact path='/mycloset'>
          <div className="Closet">
            <img src={Logo3} alt="logo" style={{ width: '100%', filter: 'contrast(129%)', boxShadow: '0px 14px 5px #ccc'  }} />
            <AppMenu />
            <ClosetContainer onAddClothing={handleAddClothing}
              searchTerm={searchTerm}
              onDeleteClothing={deleteClothing}
              clothings={filteredClothings}
              users={users} models={models}
              setSearchTerm={setSearchTerm}
              setOutfits={setOutfits}
              outfits={outfits}
              onAddOutfitClothings={handleAddOutfitClothing}
              onAddOutfits={handleAddOutfit} />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App