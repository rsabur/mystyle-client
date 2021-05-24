import ClothingItem from './ClothingItem'
import OutfitMaker from './OutfitMaker'
import Grid from '@material-ui/core/Grid'
import AddCircleIcon from '@material-ui/icons/AddCircle'


function ClosetContainer({ clothings, users, models, setSearchTerm, deleteClothing, onAddClothing }) {
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

    return (
        <div className="closet-container">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitMaker users={users} models={models} />
                    <AddCircleIcon fontSize='large' 
                    style={{ color: '#A48128', border: '5px solid grey', borderRadius:'50%', marginInlineStart: '-300px' }} 
                    onClick={handleCreateOutfit} />
                </Grid>
                <Grid item xs={6}>
                    <ClothingItem onAddClothing={onAddClothing} deleteClothing={deleteClothing} clothingTop={clothingTop} clothingBottom={clothingBottom} clothingDress={clothingDress} setSearchTerm={setSearchTerm} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ClosetContainer