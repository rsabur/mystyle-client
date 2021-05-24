import ClothingItem from './ClothingItem';
import OutfitMaker from './OutfitMaker';
import Grid from '@material-ui/core/Grid';



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

    return (
        <div className="closet-container">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitMaker users={users} models={models} />
                </Grid>
                <Grid item xs={6}>
                    <ClothingItem onAddClothing={onAddClothing} deleteClothing={deleteClothing} clothingTop={clothingTop} clothingBottom={clothingBottom} clothingDress={clothingDress} setSearchTerm={setSearchTerm} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ClosetContainer;