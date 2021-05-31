import { useState } from 'react'
import SearchBar from './SearchBar'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import ClothingForm from './ClothingForm'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Card from '@material-ui/core/Card'
import StarIcon from '@material-ui/icons/Star';



const useStyles1 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: "#CFB9AD",
        // marginTop: "1rem",
    },

    root2: {
        backgroundImage: "url('https://sc04.alicdn.com/kf/Hdc86f56a3a0b48e5ba9ec6509718b8c1D.jpg')",
        borderRadius: "8%",
        border: '3px solid rgba(207,185,151,0.4)',
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        // fontSize: '15px',
        color: '#A48128',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(81, 24, 47,0.6) 0%, rgba(81, 24, 47,0.2) 70%, rgba(0,0,0,0) 100%)',
    },
}))

const useStyles2 = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))



function ClothingItem({ clothingTop,
    onCreateOutfit,
    onHandleReset,
    clothingDress,
    clothingBottom,
    setSearchTerm,
    onDeleteClothing,
    onAddClothing,
    handleClothingSelect }) {
    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [fav, setFav] = useState(false)


    const handleOpen = () => { setOpen(true) }
    const handleOpen2 = () => { setOpen2(true) }
    const handleClose = () => { setOpen(false) }
    const handleClose2 = () => { setOpen2(false) }
    const handleFavClick = () => {
        setFav(fav => !fav)
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/clothings/${id}`, {
            method: 'DELETE'
        })
        onDeleteClothing(id)
        history.push('/mycloset')
    }

    return (
        <div className="clothing-item">
            <Card className={classes1.root2} variant="outlined">
                <div className="search">
                    <br />
                    <SearchBar setSearchTerm={setSearchTerm} />
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4} >
                        {clothingTop.map((top) => (
                            <GridListTile key={top.image}  >
                                <img src={top.image} alt={top.name} onClick={() => handleClothingSelect(top.id, top.category, top.image, top.name, top.gender)} />
                                <GridListTileBar
                                    title={top.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${top.name}`}>
                                            {fav ?
                                                <StarIcon className={classes1.title} onClick={handleFavClick} />
                                                :
                                                <StarBorderIcon className={classes1.title} onClick={handleFavClick} />}
                                            <DeleteIcon size='small' onClick={() => handleDelete(top.id)} />
                                        </IconButton>} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4}>
                        {clothingBottom.map((bottom) => (
                            <GridListTile key={bottom.image} >
                                <img src={bottom.image} alt={bottom.name} onClick={() => handleClothingSelect(bottom.id, bottom.category, bottom.image, bottom.name, bottom.gender)} />
                                <GridListTileBar
                                    title={bottom.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${bottom.name}`}>
                                            {fav ?
                                                <StarIcon className={classes1.title} onClick={handleFavClick} />
                                                :
                                                <StarBorderIcon className={classes1.title} onClick={handleFavClick} />}
                                            <DeleteIcon size='small' onClick={() => handleDelete(bottom.id)} />
                                        </IconButton>} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4}>
                        {clothingDress.map((dress) => (
                            <GridListTile key={dress.image} >
                                <img src={dress.image} alt={dress.name} onClick={() => handleClothingSelect(dress.id, dress.category, dress.image, dress.name, dress.gender)} />
                                <GridListTileBar
                                    title={dress.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${dress.name}`}>
                                            {fav ?
                                                <StarIcon className={classes1.title} onClick={handleFavClick} />
                                                :
                                                <StarBorderIcon className={classes1.title} onClick={handleFavClick} />}
                                            <DeleteIcon size='small' onClick={() => handleDelete(dress.id)} />
                                        </IconButton>} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <br />
                <Button
                    type="button"
                    variant="contained"
                    color="default"
                    onClick={handleOpen}>
                    Add Clothing </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => { onCreateOutfit(); handleOpen2() }}>
                    Create Outfit </Button>
                <Modal
                    aria-labelledby="outfit-confirmation"
                    aria-describedby="link to outfits"
                    className={classes2.modal}
                    open={open2}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500, }}>
                    <Fade in={open2}>
                        <div className={classes2.paper}>
                            <h2 id="outfit-confirmation">Outfit Created!</h2>
                            <Button variant="contained" color='primary'
                                href="/myoutfits">See all Outfits
                            </Button><br /><br />
                            <Button variant='outlined' color='default'
                                onClick={() => { onHandleReset(); handleClose2() }}>Back to Closet
                            </Button>

                        </div>
                    </Fade>
                </Modal>
                <br />
                <br />
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={onHandleReset}>
                    Reset Outfit </Button>
                <Modal
                    aria-labelledby="add-more-clothing"
                    aria-describedby="addtl-clothing-form"
                    className={classes2.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500, }}>
                    <Fade in={open}>
                        <div className={classes2.paper}>
                            <h2 id="transition-modal-title">Add More Clothing</h2>
                            <ClothingForm onAddClothing={onAddClothing} onClose={handleClose} />
                        </div>
                    </Fade>
                </Modal>
            </Card>
        </div>

    )
}

export default ClothingItem;