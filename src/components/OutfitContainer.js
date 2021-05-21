import OutfitMaker from './OutfitMaker'
import OutfitGenerator from './OutfitGenerator'

function OutfitContainer() {
    return (
        <div className="outfit-container">
            <h1>OutfitContainer</h1>
            <OutfitGenerator />
            <OutfitMaker />
        </div>
    )
}

export default OutfitContainer;