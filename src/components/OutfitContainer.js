import OutfitGenerator from './OutfitGenerator'
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from "react"
import Outfits from './Outfits'
// import {useParams} from 'react-router-dom'


function OutfitContainer({ users, models, clothings }) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [outfits, setOutfits] = useState([])
    // const [outfitClothings, setOutfitClothings] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/outfits')
            .then(r => r.json())
            .then(outfitArr => {
                setOutfits(outfitArr)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>

    const handleDeleteOutfit = (outfitId) => {
        const minusOutfit = outfits.filter(outfit => outfit.id !== outfitId)
        setOutfits(minusOutfit)
      }
      
    const outfit = outfits.map(outfit => {
        return <Outfits {...outfit} items={outfit.clothings} onDeleteOutfit={handleDeleteOutfit} />
    })


    return (
        <div className="outfit-container">
            <Grid container justify="center" spacing={2}>
                <Grid item xs={4}>
                    <OutfitGenerator />
                </Grid>
                <Grid item xs={4}>
                    <h3>My Outfits</h3>
                   {outfit}
                </Grid>
            </Grid>
        </div>
    )
}

export default OutfitContainer