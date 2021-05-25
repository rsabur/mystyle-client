import ClothingItem from './ClothingItem'
import OutfitMaker from './OutfitMaker'
import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useState } from 'react'


function ClosetContainer({ clothings, users, models, setSearchTerm, deleteClothing, onAddClothing }) {
    const [top, setTop] = useState('null')
    const [bottom, setBottom] = useState('null')
    const [dress, setDress] = useState('null')
    
    const clothingTop = clothings.filter(clothing => {
        return clothing.category === 'top'
    })
    const clothingBottom = clothings.filter(clothing => {
        return clothing.category === 'bottom'
    })
    const clothingDress = clothings.filter(clothing => {
        return clothing.category === 'dress'
    })

    const handleCreateOutfit = () => {
        console.log('clicked')
    }

    const handleClothingSelect = (id, category, image, name) => {
        if (category === 'top'){
            setTop({closet_id: id, image, name})
        } else if (category === 'bottom'){
            setBottom({closet_id: id, image, name})
        } else if (category === 'dress'){
            setDress({closet_id: id, image, name})
        }
    }
    const handleReset = () => {
        setTop('')
        setBottom('')
        setDress('')
    }

    return (
        <div className="closet-container">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitMaker top={top} bottom={bottom} dress={dress} users={users} models={models} />
                    <AddCircleIcon fontSize='large' 
                    style={{ color: '#A48128', border: '3px solid grey', borderRadius:'50%', marginInlineStart: '-425px', backgroundColor: 'white' }} 
                    onClick={handleCreateOutfit} />
                </Grid>
                <Grid item xs={6}>
                    <ClothingItem onHandleReset={handleReset} handleClothingSelect={handleClothingSelect} onAddClothing={onAddClothing} deleteClothing={deleteClothing} clothingTop={clothingTop} clothingBottom={clothingBottom} clothingDress={clothingDress} setSearchTerm={setSearchTerm} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ClosetContainer