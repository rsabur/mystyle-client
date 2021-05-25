import ClothingItem from './ClothingItem'
import OutfitMaker from './OutfitMaker'
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import { useHistory } from 'react-router'


function ClosetContainer({ clothings, users,
    models, setSearchTerm, onDeleteClothing,
    onAddClothing, onAddOutfitClothings,
    onAddOutfits }) {
    const [userId] = useState(1)
    const history = useHistory()
    const [top, setTop] = useState('')
    const [name] = useState('Untitled')
    const [dress, setDress] = useState('')
    const [bottom, setBottom] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
        if (top && bottom) {
            const outfitData = {
                user_id: userId,
                name
            }
            fetch('http://localhost:3000/outfits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(outfitData)
            })
                .then(r => r.json())
                .then(outfitObj => {
                    onAddOutfits(outfitObj)
                    const outfitId = outfitObj.id

                    const firstClothingsData = {
                        outfit_id: outfitId,
                        clothing_id: top.id
                    }
                    fetch('http://localhost:3000/outfit_clothings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(firstClothingsData)
                    })
                        .then(r => r.json())
                        .then(outfitClothingObj => {
                            onAddOutfitClothings(outfitClothingObj)
                        })
                        .then(() => {
                            const secondClothingsData = {
                                outfit_id: outfitId,
                                clothing_id: bottom.id
                            }
                            fetch('http://localhost:3000/outfit_clothings', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                },
                                body: JSON.stringify(secondClothingsData)
                            })
                                .then(r => r.json())
                                .then(outfitClothingObj => {
                                    onAddOutfitClothings(outfitClothingObj)
                                    history.push('/myoutfits')
                                })
                        })
                })

        } else if (dress) {
            const outfitData = {
                user_id: userId,
                name
            }
            fetch('http://localhost:3000/outfits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(outfitData)
            })
                .then(r => r.json())
                .then(outfitObj => {
                    onAddOutfits(outfitObj)
                    const outfitId = outfitObj.id

                    const outfitClothingsData = {
                        outfit_id: outfitId,
                        clothing_id: dress.id
                    }
                    fetch('http://localhost:3000/outfit_clothings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(outfitClothingsData)
                    })
                        .then(r => r.json())
                        .then(outfitClothingObj => {
                            onAddOutfitClothings(outfitClothingObj)
                            history.push('/myoutfits')
                        })
                })

        } else {
            setErrorMessage('Invalid Outfit!')
        }
    }

    const handleClothingSelect = (id, category, image, name, gender) => {
        if (category === 'top') {
            setTop({ closet_id: id, id, category, image, name, gender })
        } else if (category === 'bottom') {
            setBottom({ closet_id: id, id, category, image, name, gender })
        } else if (category === 'dress') {
            setDress({ closet_id: id, id, category, image, name, gender })
        }
    }
    const handleReset = () => {
        setTop('')
        setBottom('')
        setDress('')
    }

    return (
        <div className="closet-container">
            {errorMessage && <div className="error"
                style={{ fontSize: '1.5rem', color: 'red', marginLeft: '-274px' }}>
                <strong>{errorMessage}</strong>
            </div>}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OutfitMaker top={top} bottom={bottom} dress={dress}
                        users={users} models={models} />
                </Grid>
                <Grid item xs={6}>
                    <ClothingItem onHandleReset={handleReset}
                        handleClothingSelect={handleClothingSelect}
                        onAddClothing={onAddClothing}
                        onDeleteClothing={onDeleteClothing}
                        clothingTop={clothingTop}
                        clothingBottom={clothingBottom}
                        clothingDress={clothingDress}
                        setSearchTerm={setSearchTerm}
                        onCreateOutfit={handleCreateOutfit} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ClosetContainer