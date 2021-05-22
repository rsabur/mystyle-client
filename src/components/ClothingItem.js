import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchBar from './SearchBar'
import ClothingForm from './ClothingForm';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { useState } from 'react'



const useStyles1 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: "#CFB9AD",
        marginTop: "1rem",
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
        color: '#A48128',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(81, 24, 47,0.6) 0%, rgba(81, 24, 47,0.2) 70%, rgba(0,0,0,0) 100%)',
    },
}));

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
}));



function ClothingItem({ clothingTop, clothingDress, clothingBottom }) {
    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="clothing-item">
            <Card className={classes1.root2} variant="outlined">
                <div className="search">
                    <br />
                    <SearchBar />
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4}>
                        {clothingTop.map((top) => (
                            <GridListTile key={top.image}>
                                <img src={top.image} alt={top.name} />
                                <GridListTileBar
                                    title={top.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${top.name}`}>
                                            <StarBorderIcon className={classes1.title} />
                                        </IconButton>} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4}>
                        {clothingBottom.map((bottom) => (
                            <GridListTile key={bottom.image}>
                                <img src={bottom.image} alt={bottom.name} />
                                <GridListTileBar
                                    title={bottom.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${bottom.name}`}>
                                            <StarBorderIcon className={classes1.title} />
                                        </IconButton>} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className={classes1.root}>
                    <GridList className={classes1.gridList} cols={4}>
                        {clothingDress.map((dress) => (
                            <GridListTile key={dress.image}>
                                <img src={dress.image} alt={dress.name} />
                                <GridListTileBar
                                    title={dress.name}
                                    classes={{
                                        root: classes1.titleBar,
                                        title: classes1.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${dress.name}`}>
                                            <StarBorderIcon className={classes1.title} />
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
                            <p id="transition-modal-description"><ClothingForm /></p>
                        </div>
                    </Fade>
                </Modal>
            </Card>
        </div>

    )
}

export default ClothingItem;