import OutfitGenerator from './OutfitGenerator'
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from "react"
import Outfits from './Outfits'
// import {useParams} from 'react-router-dom'


function OutfitContainer({ users, models, clothings }) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [outfits, setOutfits] = useState([])
    const [outfitClothings, setOutfitClothings] = useState([])

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
            .then(outfitClothArr => {
                setOutfitClothings(outfitClothArr)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>

    return (
        <div className="outfit-container">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitGenerator />
                </Grid>
                <Grid item xs={6}>
                    <h3>My Outfits</h3>
                   <Outfits outfits={outfits} clothings={clothings} outfitClothings={outfitClothings} /> 
                </Grid>
            </Grid>
        </div>
    )
}

export default OutfitContainer