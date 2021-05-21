import ClothingItem from './ClothingItem';
import OutfitMaker from './OutfitMaker';
import Grid from '@material-ui/core/Grid';


function ClosetContainer({ clothings, users, models }) {
    const clothingTop = clothings.filter(clothing => {
        return clothing.category === 'top'
    })
    // console.log(clothingItem);
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
                    <ClothingItem clothingTop={clothingTop} clothingBottom={clothingBottom} clothingDress={clothingDress} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ClosetContainer;