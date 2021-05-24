import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         display: 'inline-flex',
//         padding: theme.spacing(6),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }))

const useStyles1 = makeStyles({
    root: {
        maxWidth: 345,
    },
})

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

function Outfits() {
    // const classes = useStyles()
    // const history = useHistory()
    const classes1 = useStyles1()
    const classes2 = useStyles2()
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }
    

    return (
        
                <Card className={classes1.root}>
                <CardMedia
                    component="img"
                    alt=''
                    height="250"
                    // image={image} 
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"></Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">Username: {username}</Typography> */}
                    {/* <Typography variant="body2" color="textSecondary" component="p">Age: {age}</Typography> */}
                </CardContent>
                <CardActions>
                    <Button
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
                                <h2 id="transition-modal-title">Edit Profile</h2>
                                    {/* <ProfileEditForm id={id}
                                        name={name}
                                        username={username}
                                        age={age}
                                        gender={gender}
                                        password={password}
                                        image={image} /> */}
                                        </div>
                        </Fade>
                    </Modal>
                    <Button 
                    // onClick={handleDeleteProfile}
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes2.button}
                        startIcon={<DeleteIcon />}>
                        Delete
                  </Button>
                </CardActions>
            </Card>
    )
}

export default Outfits