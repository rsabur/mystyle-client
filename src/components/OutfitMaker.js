

function OutfitMaker({ users, models }) {
    const model = models.map(model => model)

    return (
        <div className="outfit-maker">
            <img src={model[0].image} alt={model[0].color} style={{height: "30rem"}} />
        </div>
    )
}

export default OutfitMaker;