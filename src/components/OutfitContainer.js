import Outfits from './Outfits'

function OutfitContainer({ outfits, setOutfits, onEditOutfit }) {
    const handleDeleteOutfit = (outfitId) => {
        const minusOutfit = outfits.filter(outfit => outfit.id !== outfitId)
        setOutfits(minusOutfit)
    }
    
    const outfit = outfits.map(outfit => {
        return <Outfits key={outfit.name + outfit.id} {...outfit}
            items={outfit.clothings} onDeleteOutfit={handleDeleteOutfit}
            onEditOutfit={onEditOutfit} />
    })

    return (
        <div className="outfit-container" style={{backgroundImage: 'url("https://image.freepik.com/free-vector/geometric-medical-concept-white-background_88211-251.jpg")'}} >
            <h2>My Outfits</h2>
            {/* <div className='outfit-cards'> */}
                {outfit}
            {/* </div> */}
        </div>
    )
}

export default OutfitContainer