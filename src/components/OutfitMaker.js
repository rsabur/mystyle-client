

function OutfitMaker({ users, models, image, top, bottom, dress, name }) {
    const model = models.map(model => model)
    // console.log(top, bottom, dress.name)

    const dressClassName = (name) => {
        if (name === 'Tropical Dress'){
            return 'position-tropical-dress'
        } else if (name === 'Black Mini Dress'){
            return 'position-black-dress'
        } else if (name === 'White Dress'){
            return 'position-white-dress'
        }
    }
    
    const topClassName = (name) => {
        if (name === 'Blue Crop Top'){
            return 'position-blue-top'
        } else if (name === 'White Crop Top'){
            return 'position-white-top'
        } else if (name === 'White Top'){
            return 'position-knot-top'
        }
    }

    const bottomClassName = (name) => {
        if (name === 'Pink Pencil Skirt'){
            return 'position-pencil-skirt'
        } else if (name === 'Jean Shorts'){
            return 'position-jean-shorts'
        } else if (name === 'Asymetrical Tan Skirt'){
            return 'position-tan-skirt'
        }
    }

    return (
        <div className="outfit-maker">
            <img className={topClassName(top.name)} src={top.image} alt={top.name} />
            <img className={bottomClassName(bottom.name)} src={bottom.image} alt={bottom.name} />
            <img className={dressClassName(dress.name)} src={dress.image} alt={dress.name} />
            <img src={model[0].image} alt={model[0].color} style={{height: "35rem"}} />
        </div>
    )
}

export default OutfitMaker;