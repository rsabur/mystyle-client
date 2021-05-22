import OutfitGenerator from './OutfitGenerator'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from "react";
import Outfits from './Outfits';


function OutfitContainer({ users, models }) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/outfits')
            .then(r => r.json())
            .then(outfitArr => {
                setOutfits(outfitArr)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>

    const outfit = outfits.map(outfit => <Outfits key={outfit.id} {...outfit} />)

    return (
        <div className="outfit-container">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitGenerator />
                </Grid>
                <Grid item xs={6}>
                    <h3>My Outfits</h3>
                    {outfit}
                </Grid>
            </Grid>
        </div>
    )
}

export default OutfitContainer;