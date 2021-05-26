import Outfits from './Outfits'

function OutfitContainer({ outfits, setOutfits, onEditOutfit }) {
    const handleDeleteOutfit = (outfitId) => {
        const minusOutfit = outfits.filter(outfit => outfit.id !== outfitId)
        setOutfits(minusOutfit)
    }
    
    const outfit = outfits.map(outfit => {
        return <Outfits key={outfit.id} {...outfit}
            items={outfit.clothings} onDeleteOutfit={handleDeleteOutfit}
            setOutfits={setOutfits} outfits={outfits} onEditOutfit={onEditOutfit} />
    })

    return (
        <div className="outfit-container">
            <h2>My Outfits</h2>
            <div className='outfit-cards'>
                {outfit}
            </div>
        </div>
    )
}

export default OutfitContainer