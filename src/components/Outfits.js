import { useState } from 'react'
import { useHistory } from 'react-router'
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import OutfitEditForm from './OutfitEditForm'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import DeleteIcon from '@material-ui/icons/Delete'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const useStyles1 = makeStyles({
    root: {
        maxWidth: 345,
    },
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'inline-flex',
        padding: theme.spacing(6),
        margin: '1rem',
        backgroundColor: 'gainsboro',
        opacity: '0.9',
        // height: '400px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
    button: {
        backgroundColor: 'white'
    }
}))

function Outfits({ name, id, items, onDeleteOutfit, onEditOutfit }) {
    const classes = useStyles()
    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }



    const outfitImages = !!items && items.map(item => item.image)
    const itemName = !!items && items.map(item => item.name)

    const handleDeleteOutfit = () => {
        fetch(`http://localhost:3000/outfits/${id}`, {
            method: 'DELETE'
        })
        onDeleteOutfit(id)
        history.push('/myoutfits')
    }

    const handleRenderImage = () => {
        if (outfitImages.length > 1) {
            return (
                <>
                    <CardMedia
                        className='outfit-format'
                        component="img"
                        alt={name}
                        // height="200"
                        style={{ marginBottom: '-13rem' }}
                        image={outfitImages[0]} />
                    <CardMedia
                        className='outfit-format'
                        component="img"
                        alt={name}
                        // height="200"
                        // style={{ width: '68%', marginLeft: '3.5rem' }}
                        image={outfitImages[1]} />
                </>
            )
        } else if (outfitImages.length === 1) {
            return (
                <CardMedia
                    className='outfit-format'
                    component="img"
                    alt={name}
                    // height="250"
                    // style={{  marginTop: '10rem' }}
                    image={outfitImages} />)
        }
    }

    const handleRenderName = () => {
        if (itemName.length > 1) {
            return (
                <Typography variant="body2" color="textSecondary" component="p">
                    Clothing Name: {itemName[0]} & {itemName[1]}</Typography>
            )
        } else {
            <Typography variant="body2" color="textSecondary" component="p">
                Clothing Name: {itemName}</Typography>
        }
    }


    return (
        <Paper className={classes.paper}>
            <Card className={classes1.root} key={id} >
                {handleRenderImage()}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}</Typography>
                    {handleRenderName()}
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <Button
                className={classes2.button}
                size="small"
                variant="outlined"
                color="primary"
                type="button"
                onClick={handleOpen}>
                Edit
                    </Button>
            <Modal
                aria-labelledby="edit-profile"
                aria-describedby="edit-profile"
                className={classes2.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <div className={classes2.paper}>
                        <h2 id="transition-modal-title">Change Outfit Name</h2>
                        <OutfitEditForm id={id} outfitName={name}
                            handleClose={handleClose}
                            onEditOutfit={onEditOutfit} />
                    </div>
                </Fade>
            </Modal>
            <Button
                onClick={handleDeleteOutfit}
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}>

            </Button>
        </Paper>
    )
}

export default Outfits